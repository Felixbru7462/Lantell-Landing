import type { NextConfig } from "next";

/**
 * Security headers for the public marketing site. Same spine as the app
 * (app.lantell.io), minus anything that assumes an authenticated session.
 */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig: NextConfig = {
  // PostHog's documented Next.js proxy: analytics rides our own domain so ad-blockers, which a
  // large share of B2B desktop traffic runs, don't drop the events. Static assets come from the
  // assets host, everything else from the ingestion host.
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      { source: "/ingest/:path*", destination: "https://us.i.posthog.com/:path*" },
    ];
  },
  // Required by the proxy above: without it Next's trailing-slash redirect breaks ingestion.
  skipTrailingSlashRedirect: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
