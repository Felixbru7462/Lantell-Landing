"use client";

import { useState } from "react";
import posthog from "posthog-js";
import { ArrowRight, CircleAlert, CircleCheck } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const PROMISES = [
  "30-minute personalized walkthrough",
  "See your allowance workflow mapped live",
  "No commitment - bring a real project",
];

type Status = "idle" | "sending" | "sent" | "error";

export function DemoCta() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot. Never shown, never focusable — only a bot fills it.
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, company_website: companyWebsite }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // The conversion event, fired only on success. Deliberately carries no properties: the
      // address is PII and belongs in the demo pipeline, not in analytics. No-ops when PostHog
      // was never initialised.
      posthog.capture("demo_requested");
      setStatus("sent");
    } catch {
      posthog.capture("demo_request_failed");
      setStatus("error");
    }
  }

  return (
    <section id="cta" className="bg-white">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Eyebrow label="GET STARTED / BOOK A DEMO" className="mb-5" />
            <h2 className="font-heading font-bold text-[#1A1C1E] text-4xl lg:text-6xl tracking-[-0.03em] leading-[1.02]">
              Stop chasing documents.
              <br />
              <span className="text-[#8B1F1F]">Start releasing.</span>
            </h2>

            <div className="mt-8 space-y-3.5">
              {PROMISES.map((promise) => (
                <div key={promise} className="flex items-center gap-3">
                  <CircleCheck size={18} className="text-[#008545] shrink-0" />
                  <span className="font-body text-[#1A1C1E]/80 text-lg">{promise}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border border-[#1A1C1E] bg-white p-7 lg:p-9">
              <span className="font-mono text-[10px] tracking-wider text-[#1A1C1E]/40 uppercase">
                DEMO_REQUEST / FORM_ID: CTA-001
              </span>

              {status === "sent" ? (
                <div className="mt-5">
                  <div className="flex items-center gap-2.5">
                    <CircleCheck size={18} className="text-[#008545] shrink-0" />
                    <span className="font-mono text-[11px] tracking-wider text-[#008545] uppercase">
                      Request received
                    </span>
                  </div>
                  <p className="font-heading font-semibold text-[#1A1C1E] text-xl mt-3 leading-tight">
                    Thanks - I&apos;ll reply within one business day.
                  </p>
                  <p className="font-body text-[#1A1C1E]/60 mt-2 leading-[1.6]">
                    Have a project in mind? Bring it to the call and we&apos;ll map it live.
                  </p>
                </div>
              ) : (
                <form className="relative mt-5" onSubmit={handleSubmit}>
                  <label
                    htmlFor="demo-email"
                    className="block font-mono text-[11px] tracking-wider text-[#1A1C1E]/60 uppercase mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@company.com"
                    value={email}
                    disabled={status === "sending"}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full border border-[#E4E6E8] bg-[#F4F5F6] px-4 py-3.5 font-body text-[#1A1C1E] placeholder:text-[#1A1C1E]/30 focus:outline-none focus:border-[#8B1F1F] focus:bg-white transition-colors"
                  />
                  <label
                    htmlFor="demo-message"
                    className="mt-5 block font-mono text-[11px] tracking-wider text-[#1A1C1E]/60 uppercase"
                  >
                    Anything specific?{" "}
                    <span className="text-[#1A1C1E]/35">(optional)</span>
                  </label>
                  <textarea
                    id="demo-message"
                    rows={3}
                    maxLength={1000}
                    placeholder="A property you're working on, a draw that's stuck, a process you want to replace."
                    value={message}
                    disabled={status === "sending"}
                    onChange={(event) => setMessage(event.target.value)}
                    className="mt-2 w-full resize-none border border-[#E4E6E8] bg-[#F4F5F6] px-4 py-3.5 font-body text-[#1A1C1E] placeholder:text-[#1A1C1E]/30 focus:outline-none focus:border-[#8B1F1F] focus:bg-white transition-colors"
                  />

                  {/* Honeypot: off-screen rather than display:none, which bots skip. */}
                  <div aria-hidden className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
                    <label htmlFor="company-website">Company website</label>
                    <input
                      id="company-website"
                      name="company_website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={companyWebsite}
                      onChange={(event) => setCompanyWebsite(event.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group w-full mt-5 bg-[#8B1F1F] hover:bg-[#6B1717] disabled:bg-[#8B1F1F]/60 text-white font-body font-medium px-6 py-4 flex items-center justify-center gap-2.5 transition-colors"
                  >
                    {status === "sending" ? "Sending..." : "Book a Demo"}
                    {status !== "sending" && (
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    )}
                  </button>

                  {status === "error" && (
                    <p className="mt-3 flex items-center gap-2 font-body text-sm text-[#8B1F1F]">
                      <CircleAlert size={16} className="shrink-0" />
                      That didn&apos;t send. Try again in a moment.
                    </p>
                  )}
                  <p className="mt-4 font-mono text-[10px] tracking-wider text-[#1A1C1E]/40 uppercase text-center">
                    We respond within one business day
                  </p>
                  {/* A form that takes an address should say what happens to it, in one line. */}
                  <p className="mt-3 font-body text-xs text-[#1A1C1E]/45 leading-[1.6] text-center">
                    Used to reply to you, nothing else.{" "}
                    <a
                      href="/privacy"
                      className="underline decoration-[#1A1C1E]/20 underline-offset-2 hover:text-[#8B1F1F] hover:decoration-[#8B1F1F]"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
