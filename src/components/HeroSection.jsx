"use client";

import { useState } from "react";
const PHOTO_TREATMENT = "sepia(10%) saturate(65%) brightness(0.87) contrast(1.06)";

export default function HeroSection() {
  const [photoVisible, setPhotoVisible] = useState(true);

  const links = [
    { label: "LinkedIn", href: "https://linkedin.com/in/adlerjake" },
    { label: "GitHub", href: "https://github.com/JakeA02" },
    { label: "Substack", href: "https://thejakeadler.substack.com" },
    { label: "Email", href: "mailto:jakeadler02@gmail.com" },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100svh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
      }}
      className="hero-grid"
    >
      {/* Left: text content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(6rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem) clamp(5rem, 10vw, 8rem)",
          position: "relative",
        }}
      >
        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 8vw, 8rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "#f0ede6",
            margin: 0,
            animation: "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both",
          }}
        >
          Jake Adler
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.72rem, 1.2vw, 0.88rem)",
            fontWeight: 400,
            letterSpacing: "0.04em",
            color: "#a8a49c",
            marginTop: "clamp(1.25rem, 3vw, 2rem)",
            maxWidth: "32rem",
            lineHeight: 1.7,
            animation: "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both",
          }}
        >
          AI engineer. Founder. I secure AI systems by day and use them to make kids the heroes of their own stories by night.
        </p>

        {/* Link strip */}
        <nav
          aria-label="Social links"
          style={{
            display: "flex",
            gap: "clamp(1rem, 2.5vw, 2rem)",
            marginTop: "clamp(2rem, 4vw, 3rem)",
            flexWrap: "wrap",
            animation: "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              className="hover-underline"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#6b6560",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a853")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6560")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(1.5rem, 4vw, 3rem)",
            left: "clamp(1.5rem, 6vw, 6rem)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            animation: "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#2a2825",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#3a3835",
            }}
          >
            scroll
          </span>
        </div>
      </div>

      {/* Right: portrait photo */}
      <div
        style={{
          position: "relative",
          borderLeft: "1px solid #2a2825",
          overflow: "hidden",
          animation: "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both",
          minHeight: "60vw",
        }}
        className="hero-photo-col"
      >
        {photoVisible && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="https://storybooku-templates.s3.us-east-1.amazonaws.com/hero-image.webp"
            alt="Jake Adler"
            priority={true}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 15%",
              display: "block",
              filter: PHOTO_TREATMENT,
            }}
            onError={() => setPhotoVisible(false)}
          />
        )}
        {/* Top gradient — keeps nav links legible over the photo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8rem",
            background: "linear-gradient(to bottom, rgba(16,15,12,0.7) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-photo-col {
            border-left: none !important;
            border-top: 1px solid #2a2825;
            min-height: 75vw !important;
          }
        }
      `}</style>
    </section>
  );
}
