import { HeroSection, ProjectsSection, AISection, JourneySection, Footer, CTA } from "@/components";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      <HeroSection />
      <ProjectsSection />
      <AISection />
      <JourneySection />
      <CTA />
      <Footer />
    </main>
  );
}
