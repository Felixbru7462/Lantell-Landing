import { Eyebrow } from "./Eyebrow";

/**
 * No numbers, because contracts are set per customer (migration 036) — but the *mechanics* are
 * public, which is the honest version of "contact us for pricing". Each line matches what the
 * metering actually does: one credit per active project per calendar month, nothing charged while a
 * project sits in setup, and an auto-pause after 30 quiet days that resumes free.
 */
const TERMS = [
  {
    label: "The unit",
    body: "One active project, one calendar month. Invite the whole team - users don't change the bill.",
  },
  {
    label: "Setup is free",
    body: "A project costs nothing while you configure it. Metering starts when you activate it.",
  },
  {
    label: "Quiet projects pause",
    body: "After 30 days without activity a project pauses itself, and resumes for free when work restarts.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-band border-y border-hairline">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <Eyebrow label="PRICING / HOW IT'S METERED" className="mb-10" />

        <h2 className="mb-12 max-w-2xl font-heading font-bold text-ink text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.02]">
          Priced by the project,
          <br />
          not the seat.
        </h2>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {TERMS.map((term) => (
            <div key={term.label} className="border-t border-ink/15 pt-5">
              <span className="font-mono text-[10px] tracking-wider text-brand uppercase">
                {term.label}
              </span>
              <p className="mt-2.5 font-body text-ink/70 leading-[1.6]">{term.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 font-mono text-[10px] tracking-wider text-ink/50 uppercase">
          Contracts are set per customer - exact numbers come on the call
        </p>
      </div>
    </section>
  );
}
