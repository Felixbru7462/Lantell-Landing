import { Banknote, CalendarClock, FileCheck2, History, Link2, UserCheck } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const MODULES = [
  {
    icon: FileCheck2,
    tag: "DOC_MGMT / 01",
    title: "Required Document Collection",
    body: "Certificates of insurance, lien waivers, permits, and architect approvals, gathered against a per-draw checklist. Every submission is versioned, validated, and locked to the tenant file.",
  },
  {
    icon: Link2,
    tag: "PORTAL / 02",
    title: "Tenant Portal",
    body: "Tenants and contractors upload through a private link - no account, no training. Everything lands in the right draw's checklist.",
  },
  {
    icon: CalendarClock,
    tag: "SCHED / 03",
    title: "Timeline Management",
    body: "Track every milestone from lease execution to substantial completion. Automated reminders keep tenants, contractors, and brokers moving in lockstep.",
  },
  {
    icon: UserCheck,
    tag: "APPROVALS / 04",
    title: "Approval Chains",
    body: "Route a cleared draw to whoever has to sign off - owners, lenders, asset managers. Each reviewer approves from a link, without a Lantell login.",
  },
  {
    icon: Banknote,
    tag: "FUNDS / 05",
    title: "Allowance Release",
    body: "When every condition is verified, Lantell issues a release memo - the signed-off instruction your AP team pays from. Lantell never moves the money itself.",
  },
  {
    icon: History,
    tag: "AUDIT / 06",
    title: "Timestamped Audit Trail",
    body: "An immutable ledger records every action - who submitted, who approved, when, and why. Defensible records for owners, auditors, and legal, exportable as a single close-out package.",
  },
];

export function Modules() {
  return (
    <section id="features" className="bg-white">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 lg:mb-20">
          <div className="lg:col-span-5">
            <Eyebrow label="THE PLATFORM / 06 MODULES" className="mb-5" />
            <h2 className="font-heading font-bold text-[#1A1C1E] text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.02]">
              One system for the
              <br />
              entire buildout.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-body text-[#1A1C1E]/70 text-lg leading-[1.6]">
              Tenant improvements live or die on documentation. Lantell replaces shared drives,
              email chains, and spreadsheets with a single source of truth - so allowances release
              on time and nothing falls through the cracks.
            </p>
          </div>
        </div>

        <div className="grid gap-px border border-[#E4E6E8] bg-[#E4E6E8] sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map(({ icon: Icon, tag, title, body }) => (
            <div
              key={tag}
              className="bg-white p-8 lg:p-10 group hover:bg-[#F4F5F6] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border border-[#1A1C1E] flex items-center justify-center group-hover:bg-[#8B1F1F] group-hover:border-[#8B1F1F] transition-colors">
                  <Icon
                    size={22}
                    className="text-[#1A1C1E] group-hover:text-white transition-colors"
                  />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-[#1A1C1E]/40 uppercase">
                  {tag}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-[#1A1C1E] text-xl lg:text-2xl tracking-[-0.02em] mb-3">
                {title}
              </h3>
              <p className="font-body text-[#1A1C1E]/60 leading-[1.6]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
