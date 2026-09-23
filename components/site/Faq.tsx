import { ChevronDown } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

/**
 * Native <details>/<summary> rather than a JS accordion: it stays a server component, the answers
 * stay in the page source for search engines, and keyboard operation comes for free. No height
 * animation — native details can't animate without JS, and instant suits the rest of the page.
 */
const QUESTIONS = [
  {
    q: "Does Lantell move money?",
    a: "No, by design. Lantell issues the release memo and the evidence behind it; your existing AP process pays from it. There is no payments integration to audit.",
  },
  {
    q: "Do tenants need an account?",
    a: "No. Tenants and contractors upload through a private link - no password, nothing to install, nothing for you to administer.",
  },
  {
    q: "Can owners or lenders approve without a login?",
    a: "Yes. Every reviewer in an approval chain gets their own link and signs off from it. Only the people configuring projects need accounts.",
  },
  {
    q: "What happens when a project finishes?",
    a: "It moves into the property's permanent Vault, and the whole paper trail exports as a single close-out package PDF.",
  },
  {
    q: "Who can see what?",
    a: "Three levels: full access, read-and-approve oversight for asset managers, and read-only. Tenant correspondence stays with the people who own the relationship.",
  },
  {
    q: "How do we start?",
    a: "Add the property, pick a checklist template, send the tenant their link. Bring one real project to the demo and we'll set it up together.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-page">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow label="QUESTIONS / BEFORE YOU ASK" className="mb-5" />
            <h2 className="font-heading font-bold text-ink text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.02]">
              The questions
              <br />
              we always get.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {QUESTIONS.map((item) => (
              <details key={item.q} className="group border-t border-ink/15">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-heading font-semibold text-ink text-lg tracking-[-0.01em]">
                    {item.q}
                  </h3>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-brand-fill transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="pb-6 pr-10 font-body text-ink/70 leading-[1.6]">{item.a}</p>
              </details>
            ))}
            <div className="border-t border-ink/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
