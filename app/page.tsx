import Hero from "@/components/sections/hero";
import ServicesPreview from "@/components/sections/services-preview";
import FeaturedWork from "@/components/sections/featured-work";


export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <FeaturedWork/>
    </main>
  );
}