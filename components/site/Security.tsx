import { Eyebrow } from "./Eyebrow";

/**
 * Every claim here is enforced in the database or the storage layer, not just in the UI — that is
 * the point of the section, and the reason none of it says "enterprise-grade".
 */
const GUARANTEES = [
  {
    label: "Separated by company",
    body: "Your documents are partitioned in the database itself, not by a filter in the interface. Another company's query cannot reach them.",
  },
  {
    label: "Only the people you name",
    body: "Three access levels, set by you. Nobody can raise their own - not a teammate, not us.",
  },
  {
    label: "Nothing disappears quietly",
    body: "Every action is recorded to a log that cannot be edited or deleted, and removed items keep their trail.",
  },
];

export function Security() {
  return (
    <section id="security" className="bg-white">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <Eyebrow label="DATA CUSTODY / SECURITY" className="mb-5" />
            <h2 className="font-heading font-bold text-[#1A1C1E] text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.02]">
              Built to keep
              <br />
              documents contained.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-body text-[#1A1C1E]/70 text-lg leading-[1.6]">
              You are handing over other people&apos;s leases, insurance certificates and lien
              waivers. The boundaries that keep them separate are enforced in the database, not in
              the interface.
            </p>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {GUARANTEES.map((item) => (
            <div key={item.label} className="border-t border-[#1A1C1E]/15 pt-5">
              <span className="font-mono text-[10px] tracking-wider text-[#8B1F1F] uppercase">
                {item.label}
              </span>
              <p className="mt-2.5 font-body text-[#1A1C1E]/70 leading-[1.6]">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 font-mono text-[10px] tracking-wider text-[#1A1C1E]/50 uppercase">
          Hosted on Vercel and Supabase Postgres
        </p>
      </div>
    </section>
  );
}
