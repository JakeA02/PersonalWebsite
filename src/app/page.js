import {
  HeroSection,
  WhatIDoSection,
  WritingsSection,
  ProjectsSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0e0e0e" }}>
      <HeroSection />
      <WhatIDoSection />
      <WritingsSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
