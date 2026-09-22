import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Metrics } from "@/components/site/Metrics";
import { Modules } from "@/components/site/Modules";
import { Screenshots } from "@/components/site/Screenshots";
import { Pipeline } from "@/components/site/Pipeline";
import { Ledger } from "@/components/site/Ledger";
import { Security } from "@/components/site/Security";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { Founder } from "@/components/site/Founder";
import { DemoCta } from "@/components/site/DemoCta";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Modules />
        <Screenshots />
        <Pipeline />
        <Ledger />
        <Security />
        <Pricing />
        <Faq />
        <Founder />
        <DemoCta />
      </main>
      <Footer />
    </>
  );
}
