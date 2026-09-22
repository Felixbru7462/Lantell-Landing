import type { Config } from "tailwindcss";

/**
 * Mirrors the token setup of the base44 design this site was ported from: three font families
 * behind CSS vars, and no custom color names — the design uses arbitrary `[#hex]` classes
 * throughout (maroon #8B1F1F, ink #1A1C1E, band #F4F5F6, hairline #E4E6E8, coral #F26C6C,
 * status green #008545), so the class strings carry the palette.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
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
