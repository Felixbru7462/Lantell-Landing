import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

const UPDATED = "21 September 2026";

export const metadata: Metadata = {
  title: "Terms of Service - Lantell",
  description:
    "The terms that govern use of Lantell: what the product does and does not do, who owns what, how it is billed, and the limits of our liability.",
  alternates: { canonical: "/terms" },
};

const SECTIONS: LegalSection[] = [
  {
    id: "agreement",
    heading: "The agreement",
    body: [
      "These terms are between you and Felix Brunnemann, who operates Lantell. They apply when you use lantell.io or app.lantell.io, whether you signed up yourself, were invited by a colleague, or were sent a link by someone using Lantell.",
      "If you agreed a separate written contract or order form with us, that document wins wherever the two disagree. These terms fill the gaps.",
      "If you are accepting on behalf of a company, you are confirming that you are allowed to bind it.",
    ],
  },
  {
    id: "what",
    heading: "What Lantell does, and what it does not",
    body: [
      "Lantell tracks the documents and approvals required to release a tenant improvement allowance, and records what happened. When the conditions on a draw are met, it produces a release memo and the evidence behind it.",
      "Lantell never moves money. A release memo is a document for your own accounts payable process - it is not a payment instruction, not a wire, and not a promise that anyone will be paid. There is no payment integration in the product.",
      "Lantell is not a law firm, an accountant, a lender, a title company or a construction adviser, and nothing it produces is legal, tax, accounting or financial advice. The checklists, templates and reminders are tools to organise your own judgement, not a substitute for it. Whether a document satisfies a lease, and whether a draw should be released, remains your decision and your responsibility.",
    ],
  },
  {
    id: "accounts",
    heading: "Accounts, access and links",
    body: [
      "You are responsible for everything done through your account and through the accounts of people you invite, including the access level you give them.",
      "Some parts of Lantell work deliberately without a login: tenants and contractors upload through a private link, and approvers sign off from one. Those links are the credential. Anyone who holds one can do what it allows, so share them only with the people they were meant for and tell us if one goes astray.",
      "Keep your own sign-in details to yourself, use an address you actually control, and tell us promptly if you think someone else is in your workspace.",
    ],
  },
  {
    id: "content",
    heading: "Your content",
    body: [
      "Everything you put into Lantell stays yours - documents, project data, messages, the audit trail. We claim no ownership of it.",
      "You give us the permission we need to host, store, copy, display and process it in order to run the service for you, and nothing beyond that. We do not use your content to train machine-learning models and we do not share it with other customers.",
      "By uploading documents that belong to a tenant, contractor, owner or lender, you confirm you are entitled to do so and that you have whatever consent or contractual right is needed. You remain responsible for what you choose to collect.",
      "You can export your data while your account is open, and we will help you get it out when you leave.",
    ],
  },
  {
    id: "acceptable",
    heading: "Acceptable use",
    body: [
      "Do not use Lantell to break the law, to store content you have no right to hold, or to harm anyone. More specifically, do not:",
      [
        "try to reach another customer's workspace, or probe the service for a way to;",
        "upload malware, or anything designed to disrupt the service;",
        "resell, sublicense or white-label the service without our written agreement;",
        "copy the product's design, code or interface to build a competing one;",
        "strip out or falsify anything in the audit trail, or use Lantell to give a misleading impression of what was approved;",
        "hammer the service with automated traffic, or scrape it.",
      ],
      "If something you do puts the service or another customer at risk, we may suspend access while we sort it out. We will tell you why.",
    ],
  },
  {
    id: "fees",
    heading: "Plans, credits and fees",
    body: [
      "Lantell is billed per active project per calendar month, not per user. Contract terms, amounts and length are agreed with each customer in writing, so what you owe is whatever your order form says.",
      "A project costs nothing while it is being configured; metering begins when you activate it. A project with no activity for 30 days pauses itself and resumes at no extra charge when work restarts.",
      "Fees are payable as set out in your order form and are non-refundable except where that document says otherwise or the law requires it. Amounts are exclusive of tax unless stated. Nothing expires or renews automatically without us agreeing it with you.",
    ],
  },
  {
    id: "availability",
    heading: "Availability and changes",
    body: [
      "We work hard to keep Lantell up, and we monitor it, but we do not promise a particular uptime unless your written contract sets one. Maintenance, provider outages and faults happen.",
      "We may add, change or retire features. If we plan to remove something you rely on, or to change these terms in a way that matters, we will give you reasonable notice at the address on your account.",
    ],
  },
  {
    id: "third-parties",
    heading: "Services we build on",
    body: [
      "Lantell runs on third-party infrastructure - hosting, database and file storage, email delivery, and analytics. They are named in our Privacy Policy. Their failures can become our outages, and we are not liable for what they do or fail to do beyond our own reasonable control.",
      "Links out to other websites are not endorsements, and what happens on them is not ours to govern.",
    ],
  },
  {
    id: "term",
    heading: "Ending it",
    body: [
      "You can stop using Lantell at any time, and you can ask us to close your account. If you are on a contract, ending it early is governed by that contract.",
      "We may suspend or end access if you materially break these terms and do not fix it after we have asked, if fees go unpaid, or if we are required to by law.",
      "When an account closes, export what you need first. We delete or anonymise workspace data within 30 days of closure unless you ask us in writing to hold it longer, or the law requires us to keep it.",
    ],
  },
  {
    id: "disclaimers",
    heading: "Disclaimers",
    body: [
      "Lantell is provided as it is. To the extent the law allows, we disclaim implied warranties of merchantability, fitness for a particular purpose and non-infringement.",
      "The audit trail is an honest record of what happened inside Lantell - who uploaded, approved, rejected or released, and when. It is not a certification that a document is genuine, that a lease condition has been satisfied, or that a payment is due. We do not verify documents on your behalf.",
    ],
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    body: [
      "To the extent the law allows, neither side is liable for indirect, incidental, special or consequential loss, or for lost profits, lost revenue, lost data or business interruption, even if warned it was possible.",
      "Our total liability arising out of or relating to Lantell is limited to the greater of the fees you paid us in the twelve months before the claim, or one hundred US dollars.",
      "Nothing here excludes liability that cannot legally be excluded - including fraud, or death or personal injury caused by negligence.",
    ],
  },
  {
    id: "indemnity",
    heading: "Indemnity",
    body: [
      "You will cover us against claims, damages and reasonable costs arising from content you put into Lantell that you had no right to put there, from your breach of these terms, and from your use of the service in a way these terms do not permit.",
    ],
  },
  {
    id: "law",
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of the State of California, United States, without regard to its conflict-of-laws rules. The state and federal courts located in California have exclusive jurisdiction, and both sides consent to that venue.",
      "If any part of these terms turns out to be unenforceable, the rest still stands.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    body: [
      "When these terms change we update the date at the top. For changes that materially affect your rights we will give notice by email to account holders before they take effect. Continuing to use Lantell after that means you accept the new version.",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    body: [
      "Questions about these terms: hello@lantell.io.",
      "How we handle information is set out in the Privacy Policy.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated={UPDATED}
      intro="These are the rules for using Lantell. They are written in plain language on purpose - if a clause is doing something you would not expect, you should be able to spot it on one read."
      sections={SECTIONS}
    />
  );
}
