import { CTASection } from "@/components/sections/cta-section";
import { Hero } from "@/components/sections/hero";
import { Programmes } from "@/components/sections/programs";
import { Welcome } from "@/components/sections/welcome";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhoShouldEnrol } from "@/components/sections/who-should-enrol";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhatWeDo />
      <Programmes />
      <WhoShouldEnrol />
      <CTASection />
    </>
  );
}
