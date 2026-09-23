import { Banknote, CircleCheck, FileText } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const STAGES = [
  {
    icon: FileText,
    stage: "STAGE 01",
    title: "Document Collection",
    body: "Required docs arrive against a checklist, reviewed against your criteria.",
    meta: "REQUIRED DOCS",
    status: "CHECKLIST",
  },
  {
    icon: CircleCheck,
    stage: "STAGE 02",
    title: "Approval & Verification",
    body: "Named reviewers approve or send back. Every decision is attributed.",
    meta: "NAMED REVIEWERS",
    status: "TIMESTAMPED",
  },
  {
    icon: Banknote,
    stage: "STAGE 03",
    title: "Allowance Release",
    body: "Conditions clear, Lantell issues the release memo and its evidence pack.",
    meta: "RELEASE MEMO",
    status: "EVIDENCE PACK",
  },
];

export function Pipeline() {
  return (
    <section id="allowance" className="bg-band border-y border-hairline">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Eyebrow label="THE ALLOWANCE ENGINE / PIPELINE" className="mb-5" />
        <h2 className="font-heading font-bold text-ink text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.02] mb-4 max-w-2xl">
          From document to release,
          <br />
          without the chase.
        </h2>
        <p className="font-body text-ink/70 text-lg leading-[1.6] max-w-xl mb-14 lg:mb-20">
          Every draw walks the same path. Each stage is gated - nothing advances until the one
          before it is verified and stamped.
        </p>

        <div className="relative">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
            {STAGES.map(({ icon: Icon, stage, title, body, meta, status }) => (
              <div key={stage} className="relative flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-page border-2 border-brand-fill flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-brand-fill" />
                  </div>
                  <span className="font-mono text-xs tracking-wider text-ink/40 uppercase">
                    {stage}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-ink text-2xl tracking-[-0.02em] mb-3">
                  {title}
                </h3>
                <p className="font-body text-ink/60 leading-[1.6] mb-6 max-w-xs">{body}</p>
                <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-4">
                  <span className="font-mono text-[10px] tracking-wider text-ink/50 uppercase">
                    {meta}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-ink/60 uppercase">
                    {/* The bullet is deliberately drawn by the system mono: JetBrains Mono has no
                        U+25CF, and next/font's metric-adjusted fallback renders it 2px wider than
                        the reference design (adjustFontFallback is a no-op in Next 16). */}
                    <span style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>●</span>{" "}
                    {status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
