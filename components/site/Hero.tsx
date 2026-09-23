import Image from "next/image";
import { ArrowRight } from "lucide-react";
import heroTower from "@/public/hero-tower.jpg";
import { Eyebrow } from "./Eyebrow";
import { GridLines } from "./GridLines";

export function Hero() {
  return (
    <section id="top" className="relative pt-16 lg:pt-20 bg-page overflow-hidden">
      <GridLines />

      <div className="relative max-w-[120rem] mx-auto px-6 lg:px-10 pt-12 lg:pt-20 pb-16 lg:pb-24">
        <Eyebrow label="TENANT IMPROVEMENT COMPLIANCE" className="mb-8 lg:mb-12" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 relative">
            <h1 className="font-heading font-bold text-ink tracking-[-0.03em] leading-[0.95] text-[2.75rem] sm:text-6xl lg:text-[5.5rem]">
              Every Draw,
              <br />
              <span className="text-brand">Documented</span>
            </h1>

            <p className="mt-7 lg:mt-9 font-body text-ink/70 text-lg lg:text-xl leading-[1.6] max-w-[34rem]">
              Lantell tracks every document and approval that has to be in place before a
              tenant&apos;s construction allowance is released - draw by draw, with a timestamped
              trail behind every decision.
            </p>

            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="/#cta"
                className="group inline-flex items-center gap-2.5 bg-brand hover:bg-brand-hover text-page font-body font-medium px-7 py-4 transition-colors"
              >
                Book a Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#features"
                className="inline-flex items-center gap-2 text-ink font-body font-medium px-2 py-4 border-b border-ink/30 hover:border-ink transition-colors"
              >
                Explore the platform
              </a>
            </div>

            <div className="mt-12 lg:mt-16 flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="font-mono text-[11px] tracking-wider text-ink/60 uppercase">
                100% Timestamped Audit Trail
              </span>
              <span className="font-mono text-[11px] tracking-wider text-ink/60 uppercase">
                Tenants upload without an account
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden">
              <Image
                src={heroTower}
                alt="A glass office tower photographed from the plaza below"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="hidden lg:block absolute -bottom-8 -left-12 bg-page border border-ink p-5 w-56 shadow-xl">
              <span className="font-mono text-[10px] tracking-wider text-brand uppercase">
                Release Gate
              </span>
              <p className="font-heading font-semibold text-ink text-lg mt-1.5 leading-tight">
                Nothing releases until every condition is verified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
