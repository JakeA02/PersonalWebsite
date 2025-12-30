"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects-section"
      className="py-20 sm:py-28 px-6 bg-gradient-to-b from-[#fffbf7] to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-14 sm:mb-16"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-3">
            Startups & Side Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight">
            What I've{" "}
            <span className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Built
            </span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg max-w-xl mx-auto">
            Passion projects and side hustles that showcase my skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

