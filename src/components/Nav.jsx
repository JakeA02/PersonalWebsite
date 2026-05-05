"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal once the user has scrolled past ~60% of the hero.
      // The nav "earns" its appearance instead of competing with the hero typography.
      setRevealed(window.scrollY > window.innerHeight * 0.6);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding:
          "clamp(1rem, 2.5vw, 1.5rem) clamp(1.5rem, 4vw, 3.5rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "clamp(1.25rem, 3vw, 2.5rem)",
        backgroundColor: "rgba(16,15,12,0.70)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #2a2825",
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: revealed ? "auto" : "none",
        transition:
          "opacity 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="hover-underline"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#a8a49c",
            textDecoration: "none",
          }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
