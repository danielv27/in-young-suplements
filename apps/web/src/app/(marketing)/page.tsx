import { HeroSection } from "@/components/marketing/HeroSection";
import { HealthAreasSection } from "@/components/marketing/HealthAreasSection";
import { ScienceSection } from "@/components/marketing/ScienceSection";
import { PersonalizedCareSection } from "@/components/marketing/PersonalizedCareSection";
import { ProductHighlights } from "@/components/products/ProductHighlights";
import { AssessmentCTA } from "@/components/marketing/AssessmentCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HealthAreasSection />
      <ScienceSection />
      <PersonalizedCareSection />
      <ProductHighlights />
      <AssessmentCTA />
    </>
  );
}
