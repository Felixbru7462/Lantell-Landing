import type { Metadata } from "next";
import { AnalyticsOptOut } from "@/components/site/AnalyticsOptOut";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

const UPDATED = "21 September 2026";

export const metadata: Metadata = {
  title: "Privacy Policy - Lantell",
  description:
    "What Lantell collects on lantell.io and inside the product, who processes it, how long it is kept, and how to opt out of analytics.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS: LegalSection[] = [
  {
    id: "scope",
    heading: "Who this covers",
    body: [
      "Lantell is operated by Felix Brunnemann, based in the United States. In this policy, \"we\" means Lantell and \"you\" means whoever is reading it - a visitor to this website, a customer using the product, or a tenant or contractor who was sent a link.",
      "It covers two things: this marketing website (lantell.io) and the product itself (app.lantell.io). Where the two differ, the difference is spelled out.",
    ],
  },
  {
    id: "site",
    heading: "What this website collects",
    body: [
      "If you fill in the demo form, we receive the email address you typed and the message you wrote, if you wrote one. That is it - there is no hidden field. We use it to reply to you and to keep a record that you asked.",
      "Everything else this website collects is analytics, described in section 5. We do not ask for a name, a phone number, or a company, and we do not buy or enrich contact data about you from anyone else.",
    ],
  },
  {
    id: "product",
    heading: "What the product collects",
    body: [
      "If you have an account on app.lantell.io, the product holds:",
      [
        "your name, email address and permission level, plus the company you belong to;",
        "the properties, projects, draws and requirements you set up, including budget and allowance figures;",
        "the documents you or your tenants and contractors upload, and the file names and dates attached to them;",
        "an append-only activity log of who did what and when - uploads, approvals, releases, deletions;",
        "messages sent in a project thread, and emails sent to a project's capture address;",
        "ordinary server logs kept by our hosting provider, which include IP addresses.",
      ],
      "Your password is handled by our authentication provider and is never visible to us. We can reset it; we cannot read it.",
      "The product does not process payments and has no payment integration, so it never holds card or bank details.",
    ],
  },
  {
    id: "roles",
    heading: "Whose data it is",
    body: [
      "For this website and for your own account details, we decide how the data is used, and this policy is the whole answer.",
      "For everything inside a customer's workspace, the customer decides. If you are a tenant, a contractor, an owner or a lender who was sent a Lantell link, the property manager who invited you is responsible for that information; we hold and process it on their instruction. Requests to see, change or remove it should go to them first. If they come to us, we will help them act on it.",
    ],
  },
  {
    id: "analytics",
    heading: "Analytics, cookies and session replay",
    body: [
      "We use PostHog for product analytics on both lantell.io and app.lantell.io. It records which pages were viewed, where the visit came from, how far down the page you scrolled, an approximate location derived from your IP address, and your browser and device type. Events are sent through our own domain rather than to PostHog directly, so an ad-blocker will not stop them; the data still goes to PostHog, in the United States.",
      "PostHog stores a first-party cookie on lantell.io. It is set for the whole domain so that one visit to this site and a later visit to the app count as the same person rather than two strangers. There are no advertising cookies, no third-party trackers, and we do not sell or share personal information for advertising.",
      "PostHog also has a session replay feature, which reconstructs what a page looked like as someone used it. On this website, everything typed into a form field is masked before it leaves your browser, so a recording shows that a field was filled, not what was in it. Inside the product, both typed input and all displayed text are masked, because most of what the product shows on screen belongs to our customers and their tenants rather than to us.",
      "If your browser sends a Do Not Track or Global Privacy Control signal, we honour it and record nothing. You can also switch analytics off here, for this browser:",
    ],
    after: <AnalyticsOptOut />,
  },
  {
    id: "use",
    heading: "What we do with it",
    body: [
      "We use it to run the product, to reply when you contact us, to keep the audit trail the product exists to produce, to send the notifications and reminders the product is configured to send, and to understand which parts of the site and product people actually use.",
      "We do not sell personal information. We do not share it with advertisers. We do not use customer documents or project data to train machine-learning models.",
    ],
  },
  {
    id: "sharing",
    heading: "Who else touches it",
    body: [
      "We are a small operation and we use established providers rather than running our own infrastructure. Each one only receives what it needs:",
      [
        "Vercel - hosts this website and the product, and keeps request logs (United States).",
        "Supabase - the database, file storage and sign-in system behind the product (United States, us-west).",
        "Resend - sends our outbound email and receives mail sent to project capture addresses (United States).",
        "PostHog - product analytics and session replay, as described above (United States).",
      ],
      "We may also share information when the law requires it, or with a professional adviser under a duty of confidence. If the business is ever sold or transferred, this policy travels with the data.",
      "Our typefaces are served from our own domain, so simply loading a page does not report your visit to a font provider.",
    ],
  },
  {
    id: "retention",
    heading: "How long we keep it",
    body: [
      "Demo requests and the email they generate: kept while there is any chance of a conversation, and deleted within 24 months of the last contact.",
      "Customer workspaces: kept for as long as the account is open. After an account is closed, we delete or anonymise the data within 30 days, unless you ask us in writing to hold it longer or the law requires us to.",
      "Because the product is an audit tool, deletions inside a workspace are deliberately soft: a removed draw or document stops appearing but leaves a dated trace in the activity log, which is what makes the log trustworthy. Hard deletion happens when the workspace is deleted.",
      "Analytics: kept by PostHog for 30 days, then deleted.",
      "Server logs: short-lived, kept by our hosting provider for its own operational window.",
    ],
  },
  {
    id: "security",
    heading: "How it is protected",
    body: [
      "Every page and API call is served over TLS. Documents live in private storage that is never publicly listable, and are handed out only through short-lived signed links.",
      "Separation between customers is enforced in the database itself rather than by a filter in the interface: a query made on behalf of one company cannot return another company's rows. Access levels are set by the customer, and nobody can raise their own.",
      "Links sent to tenants, contractors and reviewers work without a password by design, so that people outside your organisation can take part without an account. Treat those links as confidential - anyone holding one can do what the link allows.",
      "No system is perfect. If we ever discover a breach affecting your data, we will tell the affected customers without unnecessary delay and describe what happened.",
    ],
  },
  {
    id: "rights",
    heading: "Your choices and rights",
    body: [
      "You can ask us what we hold about you, ask for it to be corrected, ask for a copy, or ask us to delete it. Write to hello@lantell.io and we will answer within 30 days. We will not charge you, and we will not treat you differently for asking.",
      "We do not sell personal information and we do not share it for cross-context behavioural advertising, so there is nothing to opt out of on that front. Analytics you can switch off in section 5.",
      "If you are a tenant, contractor or reviewer, start with the property manager who invited you - the data is theirs to act on, and we will support whatever they decide.",
      "Depending on where you live you may have additional rights, and you may have the right to complain to your local data protection authority. We would rather you came to us first.",
    ],
  },
  {
    id: "children",
    heading: "Children",
    body: [
      "Lantell is a tool for commercial property management. It is not intended for anyone under 18, and we do not knowingly collect information from children.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: [
      "When this policy changes we update the date at the top. If a change materially affects how we handle information we already hold, we will tell affected customers by email rather than relying on you to notice.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    body: [
      "Privacy questions, requests and complaints: hello@lantell.io.",
      "The terms that govern use of Lantell are on the Terms of Service page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={UPDATED}
      intro="This explains what Lantell collects, why, who else can see it, and how to get it removed. It is written to be read rather than to be defensible, so if something here is unclear, that is a fault worth telling us about."
      sections={SECTIONS}
    />
  );
}
