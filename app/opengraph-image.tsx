import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

/**
 * The card that renders when the link is pasted into iMessage, Slack, WhatsApp, LinkedIn or X.
 * Deliberately typographic rather than the hero photo: a tower says nothing at the ~300px width a
 * feed actually shows. Built with Satori, so: flexbox only (no grid), and fonts must be handed
 * over as buffers — hence the static Inter Tight cuts in public/fonts.
 */
export const alt = "Lantell - Every draw, documented";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function font(file: string) {
  return fs.readFileSync(path.join(process.cwd(), "public", "fonts", file));
}

/**
 * Satori never sees tailwind.config.ts, so the palette is restated here. Keep these in step with
 * the `dark`, `page`, `brand-on-dark` and `brand-fill` tokens — this card is a dark surface, so it
 * uses the lightened accent rather than `brand`.
 */
const GROUND = "#2A2D33";
const TEXT = "#FCFBF8";
const ACCENT = "#8FAEC4";
const RULE = "#5B7E98";

export default async function OpengraphImage() {
  const [regular, bold] = [font("InterTight-Regular.ttf"), font("InterTight-Bold.ttf")];

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: GROUND,
          padding: "72px",
          fontFamily: "Inter Tight",
        }}
      >
        {/* The page's column rules, lifted to 10%: at feed size 6% disappears entirely */}
        <div
          style={{
            position: "absolute",
            // Satori ignores the `inset` shorthand, so the overlay collapsed to nothing and
            // these rules never painted. Explicit edges instead.
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                borderRight: "1px solid rgba(252,251,248,0.10)",
              }}
            />
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <div
            style={{
              display: "flex",
              width: 34,
              height: 34,
              border: `2px solid ${TEXT}`,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 14,
            }}
          >
            <div style={{ display: "flex", width: 13, height: 13, backgroundColor: ACCENT }} />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              color: TEXT,
              letterSpacing: "-0.02em",
            }}
          >
            LANTELL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: TEXT,
            }}
          >
            Every Draw,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: ACCENT,
            }}
          >
            Documented
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              color: "rgba(252,251,248,0.6)",
              maxWidth: 980,
            }}
          >
            Tenant improvement compliance for commercial property managers.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", width: 90, height: 5, backgroundColor: RULE }} />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(252,251,248,0.4)",
              letterSpacing: "0.12em",
            }}
          >
            LANTELL.IO
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter Tight", data: regular, weight: 400, style: "normal" },
        { name: "Inter Tight", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
