import { HeroSection, WorkSection, WritingsSection, JourneySection, Footer, CTA } from "@/components";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      <HeroSection />
      <WorkSection />
      <WritingsSection />
      <JourneySection />
      <CTA />
      <Footer />
    </main>
  );
}
