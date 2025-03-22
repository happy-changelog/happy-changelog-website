import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { BottomCTASection } from "@/components/sections/BottomCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImplementationSection } from "@/components/sections/ImplementationSection";
import { PersonalSection } from "@/components/sections/PersonalSection";
import { WorkflowDescription } from "@/components/sections/WorkflowDescription";

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
