import { HeroSection, ProjectsSection, JourneySection, Footer, CTA } from "@/components";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      <HeroSection />
      <ProjectsSection />
      <JourneySection />
      <CTA />
      <Footer />
    </main>
  );
}
