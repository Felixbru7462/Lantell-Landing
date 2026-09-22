/**
 * Dependency-free fixed-window rate limiter. Ported verbatim from the app repo's
 * lib/rate-limit.ts — same caveats, same signature, so a fix in one can be copied to the other.
 *
 * Scope and honest limitations — read before relying on this:
 * - State lives in module memory, so the window is **per serverless instance**. Vercel may run
 *   several concurrently, so the effective ceiling is roughly `limit × instances`. That's fine for
 *   what this defends against (a single abusive client hammering an endpoint) and useless against a
 *   genuine distributed attack.
 * - For network-level protection (bot floods, DDoS) use Vercel's firewall, not this.
 * - If you later want exact, shared counting, swap the Map for Upstash Redis behind the same
 *   `rateLimit()` signature — no call sites change.
 *
 * It exists because the alternative today is *no* limit at all on an unauthenticated endpoint that
 * causes an email to be sent.
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

// Keep the Map from growing without bound on a long-lived instance.
const MAX_TRACKED_KEYS = 10_000;

function sweep(now: number) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export interface RateLimitResult {
  ok: boolean;
  /** Seconds until the window resets — surface this to the caller as Retry-After. */
  retryAfter: number;
  remaining: number;
}

/**
 * Consume one unit against `key`. Returns `ok: false` once `limit` is exceeded inside `windowMs`.
 *
 * @param key      Identity to limit on — scope it (e.g. `upload:${projectId}`), never a bare IP
 *                 alone, since many tenants legitimately share one office IP.
 */
export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();

  if (buckets.size > MAX_TRACKED_KEYS) sweep(now);

  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0, remaining: limit - 1 };
  }

  existing.count += 1;

  if (existing.count > limit) {
    return {
      ok: false,
      retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
      remaining: 0,
    };
  }

  return { ok: true, retryAfter: 0, remaining: limit - existing.count };
}

/** The only window this site needs. Deliberately tighter than the app endpoint's, so an abusive
 *  client is stopped here rather than one hop later. */
export const LIMITS = {
  demoRequest: { limit: 5, windowMs: 60 * 60 * 1000 },
} as const;
