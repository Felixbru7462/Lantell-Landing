import type { Config } from "tailwindcss";

/**
 * The palette lives here, once, so the next change is one file instead of 188 class strings.
 *
 * Slate blue on a warm off-white, with a soft-charcoal dark surface shared with the app's sidebar.
 * Two deliberate departures from the source spec, both for contrast against `page`:
 *
 * - The whole blue family runs hotter than the spec's #5B7E98. That value is 25% saturation; the
 *   maroon it replaced was 64%, which is the entire reason the page read calmer rather than any
 *   difference of hue. These sit at ~50%, holding one hue (205 deg) and varying lightness by role.
 *   Saturation is nearly free here: every pair still clears its bar, and there is headroom to 70%
 *   if the page should shout louder. Note that raising saturation at a fixed HSL lightness LOWERS
 *   luminance for blue hues, so each step down in calm needs a step down in lightness to hold
 *   contrast — which is why these are not simply the spec values with the saturation slider moved.
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
        brand: "#34719D", // text, links, eyebrow labels, button grounds
        "brand-fill": "#4382B1", // rules, icon strokes, decorative fills
        "brand-hover": "#285B80", // button hover / active
        "brand-on-dark": "#84AECD", // the one accent on the charcoal bands

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
