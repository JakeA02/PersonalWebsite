import { HeroSection, WorkSection, JourneySection, Footer, CTA } from "@/components";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      <HeroSection />
      <WorkSection />
      <JourneySection />
      <CTA />
      <Footer />
    </main>
  );
}
