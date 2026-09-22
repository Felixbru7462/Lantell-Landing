import posthog from "posthog-js";

/**
 * Product analytics for the marketing site. A **graceful no-op when NEXT_PUBLIC_POSTHOG_KEY is
 * unset** — no init, no network, no `window.posthog` — so local dev and preview deployments never
 * pollute the data. The key is PostHog's public, write-only project key, not a secret.
 *
 * This is the client instrumentation hook rather than a React provider (which is how the app does
 * it) on purpose: the site is one static page with no client-side routing and nobody to identify,
 * so the provider's two reasons to exist — manual pageviews for App Router navigation and the
 * `usePostHog()` context — don't apply here. Default pageview capture is enough.
 *
 * SESSION REPLAY MASKS INPUTS ONLY, and that is a deliberate divergence from the app. The app sets
 * `maskTextSelector: "*"` because it *displays* third-party data — tenant names, addresses, draw
 * amounts, document filenames — and its comment says never to remove that. This site displays
 * nothing but Lantell's own marketing copy, so masking text here would protect nobody and reduce
 * every replay to grey rectangles. Inputs stay masked because the demo form takes an email.
 *
 * Do not copy this config into the app: it would silently start recording customer data.
 */
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  posthog.init(key, {
    // Proxied through our own domain so ad-blockers don't drop events — see next.config.ts.
    api_host: "/ingest",
    // Keeps the toolbar and session-recording links pointing at PostHog itself, not at /ingest.
    ui_host: "https://us.posthog.com",
    capture_pageview: true,
    // Carries max scroll depth, which is what answers "where do people leave the page".
    capture_pageleave: true,
    person_profiles: "identified_only",
    // lantell.io and app.lantell.io share a root domain, so one identity spans both and the
    // landing page -> signup funnel is a single visitor rather than two anonymous ones.
    cross_subdomain_cookie: true,
    // Honour the browser's Do Not Track / GPC signal instead of only saying we would. The privacy
    // page claims this, so it has to be true; it costs a slice of traffic and buys a real promise.
    respect_dnt: true,
    session_recording: {
      maskAllInputs: true,
    },
  });
}
