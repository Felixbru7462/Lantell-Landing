import type { MetadataRoute } from "next";

/**
 * The opposite of app.lantell.io: this is the public marketing site and is meant to be indexed.
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lantell.io";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
