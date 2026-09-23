import type { Config } from "tailwindcss";

/**
 * The palette lives here, once, so the next change is one file instead of 188 class strings.
 *
 * Slate blue on a warm off-white, with a soft-charcoal dark surface shared with the app's sidebar.
 * Two deliberate departures from the source spec, both for contrast against `page`:
 *
 * - `brand` (#4E7089) is darker than the spec's #5B7E98, which reaches only 4.16:1 as small text
 *   and 4.30:1 under white button text. This value clears 4.5:1 on BOTH grounds — eyebrow labels
 *   sit on `page` and `band` alike, and the intermediate #527490 passed on one and not the other.
 *   The spec value survives as `brand-fill` for rules, strokes and decorative fills, where the
 *   bar is 3:1 rather than 4.5:1.
 * - `attention` (#96600F) is the spec's status-attention #B8791E darkened from 3.50:1 to 5.10:1,
 *   because the only place this site needs it is a line of small text.
 *
 * `-on-dark` variants exist because neither `brand` nor `positive` survives the charcoal: they land
 * at 3.21:1 and 2.74:1 there. Named for where they belong so they can't be misused on light.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces
        page: "#FCFBF8", // page ground, and text/borders on the dark bands
        band: "#F4F3EF", // alternating section ground
        dark: "#2A2D33", // audit-ledger band and footer; same charcoal as the app sidebar

        // Text
        ink: "#17110F", // headlines, body. Opacity modifiers carry the hierarchy: ink/70 over
        "ink-soft": "#5B5650", // page computes to ~#5C5755, which is this value.

        // Lines
        hairline: "rgba(23,17,15,0.10)", // section dividers, card and input borders

        // Brand
        brand: "#4E7089", // text, links, eyebrow labels, button grounds
        "brand-fill": "#5B7E98", // rules, icon strokes, decorative fills
        "brand-hover": "#456478", // button hover / active
        "brand-on-dark": "#8FAEC4", // the one accent on the charcoal bands

        // Status — only where semantically true
        positive: "#2F7D4F",
        "positive-on-dark": "#5FAE7D",
        attention: "#96600F",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
        sans: "var(--font-body)",
      },
    },
  },
  plugins: [],
};

export default config;
