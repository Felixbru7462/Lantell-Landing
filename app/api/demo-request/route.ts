import { NextResponse } from "next/server";
import { rateLimit, LIMITS } from "@/lib/rate-limit";

/**
 * The marketing site's demo form posts here, and this hands the submission to the app
 * (app.lantell.io/api/demo-request) with a shared secret. The app owns the database write and the
 * email, because it already holds the service-role key and the Resend credentials for its own
 * reasons — this site holds neither, which is the whole point of the extra hop.
 *
 * Degrades gracefully: with the endpoint or secret unset (local dev, preview deployments) it logs
 * and reports success without forwarding, so a visitor never meets an error on a preview and no
 * half-configured deployment silently drops leads without saying so in the log.
 */

/** Conservative shape check — rejects junk without trying to be RFC-complete. */
function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(value) && value.length <= 320;
}

export async function POST(req: Request) {
  let body: { email?: unknown; message?: unknown; company_website?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Honeypot: a field no human sees and no human fills. Answer 200 so a bot learns nothing about
  // why it failed, but do no work.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    console.log("[demo-request] honeypot tripped — discarded");
    return NextResponse.json({ ok: true });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const limited = rateLimit(
    `demo:${ip}`,
    LIMITS.demoRequest.limit,
    LIMITS.demoRequest.windowMs
  );
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
    );
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!looksLikeEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const endpoint = process.env.DEMO_REQUEST_ENDPOINT;
  const secret = process.env.DEMO_REQUEST_SECRET;

  if (!endpoint || !secret) {
    console.warn(
      `[demo-request skipped — ${!endpoint ? "DEMO_REQUEST_ENDPOINT" : "DEMO_REQUEST_SECRET"} unset] ${email}`
    );
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-demo-secret": secret },
      body: JSON.stringify({
        email,
        // Optional and capped here too, so an oversized payload is rejected before the hop.
        message: typeof body.message === "string" ? body.message.trim().slice(0, 2000) : "",
        source: "landing",
        referer: req.headers.get("referer") ?? null,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`[demo-request] upstream ${res.status}: ${detail}`);
      return NextResponse.json({ error: "Could not send right now." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[demo-request] upstream unreachable", err);
    return NextResponse.json({ error: "Could not send right now." }, { status: 502 });
  }
}
