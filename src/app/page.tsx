import { HeroSection } from "@/components/sections/HeroSection";
import { WorkflowDescription } from "@/components/sections/WorkflowDescription";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { BottomCTASection } from "@/components/sections/BottomCTASection";
import { PersonalSection } from "@/components/sections/PersonalSection";
import { ImplementationSection } from "@/components/sections/ImplementationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WorkflowDescription />
      <BenefitsSection />
      <ImplementationSection />
      <PersonalSection />
      <BottomCTASection />
    </>
  );
}
