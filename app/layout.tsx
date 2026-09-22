import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * Two families carry the whole design: Inter Tight for headings and body (tight tracking, heavy
 * display weights) and JetBrains Mono for the technical micro-labels. Exposed as CSS vars so
 * `font-heading` / `font-body` / `font-mono` resolve the same way they did in the source design.
 */
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lantell.io";

const description =
  "Lantell streamlines tenant improvement buildouts for property and asset managers - sensitive document collection, construction allowance releases, timeline management, and a timestamped audit trail.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lantell - tenant improvement compliance and allowance releases",
  description,
  applicationName: "Lantell",
  appleWebApp: { capable: true, title: "Lantell", statusBarStyle: "black" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Lantell",
    title: "Lantell - tenant improvement compliance and allowance releases",
    description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lantell - tenant improvement compliance and allowance releases",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // The design is light-only; stop dark-mode UAs from repainting form controls.
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
