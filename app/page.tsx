import Hero from "@/components/sections/hero";
import ServicesPreview from "@/components/sections/services-preview";
import FeaturedWork from "@/components/sections/featured-work";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <FeaturedWork/>
      <BenefitsSection/>
      <AboutSection/>
    </main>
  );
}