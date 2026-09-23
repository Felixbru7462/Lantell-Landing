# Going live checklist

State as of 2026-09-21. The site is on the **`staging`** branch and deployed as a Vercel Preview at
`lantell-landing-git-staging-felix-brunnemanns-projects.vercel.app` (Vercel login required, and
`noindex`, so no search engine sees it). `lantell.io` still serves the old splash from `main`.

## Done

- **Vercel variables** — set by the owner on both projects (`NEXT_PUBLIC_POSTHOG_KEY`,
  `DEMO_REQUEST_ENDPOINT`, `DEMO_REQUEST_SECRET` on `lantell-landing`; `DEMO_REQUEST_SECRET`,
  `DEMO_REQUEST_TO` on `lantell`). They take effect on each project's next build.
- **Database** — migrations `037` and `038` are applied to staging and production.
- **Privacy Policy and Terms of Service** — complete, no gaps, no draft notice; California law
  governs. They name `hello@lantell.io` as the contact, which makes step 1 below a prerequisite
  rather than a nice-to-have.

## Before merging to production

### 1. Make `hello@lantell.io` receive mail

The privacy page publishes that address. Namecheap holds the DNS (`registrar-servers.com`) and the
root domain has **no MX records at all**, so nothing can conflict.

It takes two screens, which is the part that trips people up:

1. **Advanced DNS → Mail Settings → Email Forwarding → Save All Changes.** This is routing only.
   Namecheap writes its own MX records plus one SPF record whose **Host is `@`** — the SPF record
   describes the whole domain, so putting an alias name in that field publishes it for a subdomain
   nobody uses. Don't hand-edit it; let Namecheap create it.
2. **Domain tab → Redirect Email → Add Forwarder.** *This* is where `hello` gets pointed at the
   real inbox. The alias lives here, not in the DNS records.

`inbound.lantell.io` keeps its own MX (Amazon SES, for project capture addresses) — subdomain mail
records are independent of the root, so nothing collides.

Free, receive-only, and allow up to an hour before testing. Sending *as* the address is a separate
thing; see "Later" below.

### 2. Deploy the app, then this site

Order matters — the marketing site must never point a working form at a route that isn't there.

1. **App repo** — commit and push the `/api/demo-request` route to `main`. As of now that route
   returns **404 in production**, so the form cannot work until this happens. The database and the
   Vercel variables are already waiting for it.
2. **This repo** — merge `staging` into `main`. That is the moment `lantell.io` changes:

```bash
git checkout main && git merge staging && git push
```

The old splash and its waitlist form disappear then. Both are in this repo's history, and the
waitlist rows stay untouched in the database.

### 3. Verify, in this order

- Open `lantell.io`, submit the demo form with a real address.
- The email should arrive in seconds, and **hitting reply should answer the prospect**, not a
  notifications mailbox.
- The row: `select email, message, created_at from demo_requests order by created_at desc limit 5;`
- PostHog should show a pageview for `lantell.io` within a minute or two.
- Send a test message to `hello@lantell.io` and check it lands.

## Later, not blocking

- **Sending as the domain.** Forwarding only receives. To answer prospects from `@lantell.io`
  instead of a personal address, either add a cheap mailbox (Namecheap Private Email, roughly a
  dollar a month) or use a free tier that supports custom domains, then set it up as "send mail as"
  in the existing mail client.
- **App email still leaves from the wrong-looking address.** Resend has only `inbound.lantell.io`
  verified for sending, so notifications go out as `notifications@inbound.lantell.io`. Verify
  `lantell.io` as a sending domain in Resend, then set
  `EMAIL_FROM=Lantell <notifications@lantell.io>` on the app project. **Careful:** a mailbox
  provider and Resend will both want an SPF record on the root domain, and two SPF records break
  mail delivery. They have to be merged into one `v=spf1 include:a include:b ~all`.
- **A lawyer's read** of both pages once there is a contract to sign.
- **Product screenshots.** `public/shots/` is empty, so the screenshot section is hidden. Drop in
  any of `checklist.png`, `tenant-portal.png`, `release-memo.png`, `activity.png` (roughly 1440x900,
  taken on a signed-in account) and the section appears on its own, with the slots that have files.
- **A founder portrait.** Drop `public/founder.jpg` in and the "Behind Lantell" section grows a
  photo; without it the note stands alone.
