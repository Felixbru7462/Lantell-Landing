import { Eyebrow } from "./Eyebrow";

/**
 * The cell border classes are irregular on purpose: `divide-x` handles the desktop rules, while
 * the per-cell `border-b` / `border-r` close the 2-column mobile grid.
 */
const METRICS = [
  {
    label: "AUDIT",
    value: "100%",
    caption: "Every action timestamped and attributed to a named user",
    border: "border-b lg:border-b-0 border-r lg:border-r-0 border-[#E4E6E8]",
  },
  {
    label: "TENANTS",
    value: "0",
    caption: "Accounts a tenant or contractor needs to submit documents",
    border: "border-b lg:border-b-0 border-[#E4E6E8]",
  },
  {
    label: "RECORDS",
    value: "1",
    caption: "Close-out package per project, generated on demand",
    border: "border-r lg:border-r-0 border-[#E4E6E8]",
  },
  {
    label: "MONEY",
    value: "0",
    caption: "Dollars Lantell touches - releases run through your AP process",
    border: "",
  },
];

export function Metrics() {
  return (
    <section className="bg-[#F4F5F6] border-y border-[#E4E6E8]">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <Eyebrow label="BY DESIGN / WHAT THE SOFTWARE GUARANTEES" className="mb-10" />

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E4E6E8] border-t border-b border-[#E4E6E8]">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className={`px-5 lg:px-8 py-8 lg:py-10 ${metric.border}`}
            >
              <span className="font-mono text-[10px] tracking-wider text-[#1A1C1E]/40 uppercase">
                {metric.label}
              </span>
              <p className="font-heading font-bold text-[#1A1C1E] text-4xl lg:text-5xl tracking-[-0.03em] mt-2">
                {metric.value}
              </p>
              <p className="font-body text-[#1A1C1E]/60 text-sm mt-2 leading-snug">
                {metric.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
