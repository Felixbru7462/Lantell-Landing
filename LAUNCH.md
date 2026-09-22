# Going live checklist

Everything in the code is done. What is left is configuration that only the account owner can do,
in the order below. Nothing here touches `lantell.io` until step 4.

Current state: the site is on the **`staging`** branch and deployed as a Vercel Preview at
`lantell-landing-git-staging-felix-brunnemanns-projects.vercel.app` (Vercel login required, and
`noindex`, so no search engine will see it). `lantell.io` still serves the old splash from `main`.

---

## 1. Make one shared secret

The marketing site and the app authenticate to each other with a value that has to be **identical**
in both places. Generate it once:

```bash
openssl rand -hex 32
```

Keep that string handy for steps 2 and 3. It is not in this repo and must never be committed — this
repository is public.

## 2. Vercel → project `lantell-landing` → Settings → Environment Variables

| Key | Value | Environments |
|---|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | the same `phc_…` project key the app already uses | **Production** only |
| `DEMO_REQUEST_ENDPOINT` | `https://app.lantell.io/api/demo-request` | **Production** |
| `DEMO_REQUEST_SECRET` | the string from step 1 | **Production** |

Leave all three off **Preview** and **Development** on purpose: analytics then records nothing from
preview branches, and the demo form on a preview accepts the submission and quietly discards it
instead of emailing a real lead. (If you do want the form live on staging, add the two
`DEMO_REQUEST_*` rows to Preview as well — submissions from any branch then reach your inbox.)

## 3. Vercel → project `lantell` (the app) → Settings → Environment Variables

| Key | Value | Environments |
|---|---|---|
| `DEMO_REQUEST_SECRET` | **the same string from step 1** | **Production** |
| `DEMO_REQUEST_TO` | the address demo requests should reach | **Production** |

Production only. The app's previews run against the staging database with email switched off, and
`DEMO_REQUEST_TO` is deliberately separate from `OWNER_ALERT_EMAIL` so contract warnings and demo
requests can go to different places later.

## 4. Deploy, app first

Environment variables are read when a deployment is built, so each project needs a deploy **after**
its variables exist.

1. **App repo** — commit and push the demo-request route to `main`. Database migrations `037` and
   `038` are already applied to both staging and production, so the schema is waiting for it.
2. **This repo** — merge `staging` into `main`. That is the moment `lantell.io` changes:

```bash
git checkout main && git merge staging && git push
```

The old splash page and its waitlist form disappear at that point. Both are in git history, and the
waitlist rows stay untouched in the database.

## 5. Verify, in this order

- Open `lantell.io`, submit the demo form with a real address.
- The email should arrive within a few seconds, and **hitting reply should answer the prospect**, not
  a notifications mailbox.
- The row: `select email, message, created_at from demo_requests order by created_at desc limit 5;`
- PostHog should show a pageview for `lantell.io` within a minute or two.

---

## Worth doing before launch, but not blocking

- **Legal pages.** `/privacy` and `/terms` are drafts. Fill in every `[[highlighted]]` gap, have a
  lawyer read them, then set `LEGAL_DRAFT = false` in `components/site/LegalPage.tsx` to remove the
  draft banner.
- **A mailbox on the domain.** The legal pages need a contact address that actually receives mail.
  `inbound.lantell.io` is a receiving subdomain for project capture addresses, not a mailbox —
  there is nothing at `privacy@lantell.io` today.
- **Send as the real domain.** Resend has only `inbound.lantell.io` verified for sending, so app
  email currently goes out as `notifications@inbound.lantell.io`. Add `lantell.io` as a sending
  domain in Resend, publish its DKIM/SPF records, then set
  `EMAIL_FROM=Lantell <notifications@lantell.io>` on the app project.
- **Product screenshots.** `public/shots/` is empty, so the screenshot section is hidden. It appears
  as soon as the images are there (see `components/site/Screenshots.tsx` for the filenames).
- **A founder portrait.** Drop `public/founder.jpg` in and the "Behind Lantell" section grows a
  photo; without it the note stands alone.
