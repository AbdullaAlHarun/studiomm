import Hero from "@/components/sections/hero";
import ServicesPreview from "@/components/sections/services-preview";
import FeaturedWork from "@/components/sections/featured-work";
import BenefitsSection from "@/components/sections/BenefitsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <FeaturedWork/>
      <BenefitsSection/>
    </main>
  );
}