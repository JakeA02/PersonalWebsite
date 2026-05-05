"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/data/projects";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function ProjectCard({ project, index, parentVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "clamp(1.5rem, 3vw, 2.25rem)",
        border: `1px solid ${hovered ? "#d4a853" : "#2a2825"}`,
        borderRadius: "2px",
        textDecoration: "none",
        backgroundColor: hovered ? "#111010" : "transparent",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease",
        opacity: parentVisible ? 1 : 0,
        animation: parentVisible
          ? `fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${0.05 + index * 0.1}s both`
          : "none",
        minHeight: "14rem",
        justifyContent: "space-between",
      }}
    >
      {/* Top: label + title */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: hovered ? "#d4a853" : "#3a3835",
            margin: "0 0 1rem 0",
            transition: "color 0.25s ease",
          }}
        >
          {project.label}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#f0ede6",
            margin: "0 0 1rem 0",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            lineHeight: 1.75,
            color: "#a8a49c",
            margin: 0,
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Bottom: detail + arrow */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "2rem",
        }}
      >
        {project.detail ? (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "#d4a853",
              letterSpacing: "0.04em",
            }}
          >
            {project.detail}
          </span>
        ) : (
          <span />
        )}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: hovered ? "#d4a853" : "#3a3835",
            transform: hovered ? "translate(4px, -2px)" : "translate(0,0)",
            display: "inline-block",
            transition: "color 0.25s ease, transform 0.25s ease",
          }}
        >
          →
        </span>
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  const [ref, visible] = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "clamp(5rem, 12vw, 10rem) clamp(1.5rem, 6vw, 6rem)",
        borderTop: "1px solid #2a2825",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#6b6560",
          marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Selected Work
      </p>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: "1.5rem",
        }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            parentVisible={visible}
          />
        ))}
      </div>
    </section>
  );
}
