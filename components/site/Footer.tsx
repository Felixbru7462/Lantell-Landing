import { ArrowRight } from "lucide-react";
import { Mark } from "./Mark";

/**
 * Every link here goes somewhere real. Careers (no company to join yet), DPA (an enterprise
 * artifact that doesn't exist), and the "all systems operational" pill (there is no status page —
 * /api/health is a probe) were removed rather than left as dead ends.
 */
const COLUMNS = [
  {
    heading: "Platform",
    start: "lg:col-start-8",
    links: [
      { label: "Document Collection", href: "/#features" },
      { label: "Tenant Portal", href: "/#features" },
      { label: "Approval Chains", href: "/#allowance" },
      { label: "Audit Trail", href: "/#ledger" },
    ],
  },
  {
    heading: "Company",
    start: "lg:col-start-9",
    links: [
      { label: "Pricing", href: "/#pricing" },
      { label: "Security", href: "/#security" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Legal",
    start: "lg:col-start-11",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-dark text-page">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10 pt-16 lg:pt-20 pb-8">
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-page/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <Mark tone="dark" />
              <span className="font-heading font-bold text-page text-xl tracking-[-0.02em]">
                LANTELL
              </span>
            </div>
            <p className="font-body text-page/50 text-base leading-[1.6] max-w-sm">
              The operating system for tenant improvement buildouts. Built for property and asset
              managers who can&apos;t afford to lose track of a document or a dollar.
            </p>
            <a
              href="/#cta"
              className="group mt-6 inline-flex items-center gap-2 font-body text-sm text-page/70 transition-colors hover:text-page"
            >
              Talk to us
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading} className={`lg:col-span-2 ${column.start}`}>
              <h4 className="font-mono text-[10px] tracking-wider text-page/40 uppercase mb-4">
                {column.heading}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-page/70 hover:text-page text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-mono text-[11px] tracking-wider text-page/40 uppercase">
            © 2026 Lantell / ALL RIGHTS RESERVED
          </p>
          <a
            href="https://app.lantell.io/sign-in"
            className="font-mono text-[11px] tracking-wider text-page/40 uppercase transition-colors hover:text-page/70"
          >
            Sign in to Lantell
          </a>
        </div>
      </div>
    </footer>
  );
}
