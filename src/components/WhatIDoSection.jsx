"use client";

import { useEffect, useRef, useState } from "react";


function useInView(threshold = 0.15) {
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

function BrowserMockup({ url, domain, src, alt, accentColor }) {
  const [hovered, setHovered] = useState(false);
  const [imgVisible, setImgVisible] = useState(true);

  if (!imgVisible) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        marginTop: "2.25rem",
        width: "85%",
      }}
    >
      <div
        style={{
          border: `1px solid ${hovered ? accentColor : "#2a2825"}`,
          borderRadius: "6px",
          overflow: "hidden",
          transition: "border-color 0.25s ease",
        }}
      >
        {/* Browser chrome bar */}
        <div
          style={{
            background: "#161412",
            padding: "7px 12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderBottom: "1px solid #2a2825",
          }}
        >
          {/* Traffic light dots */}
          <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#2a2825",
                }}
              />
            ))}
          </div>

          {/* URL bar */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: "#0f0e0b",
                borderRadius: 3,
                padding: "2px 14px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                color: "#6b6560",
                letterSpacing: "0.04em",
                maxWidth: "14rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {domain}
            </div>
          </div>
        </div>

        {/* Screenshot + hover overlay */}
        <div style={{ position: "relative", lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "sepia(5%) saturate(85%) brightness(0.92)",
            }}
            onError={() => setImgVisible(false)}
          />
          {/* "Visit site" overlay on hover */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(12, 11, 9, 0.65)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.25s ease",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#f0ede6",
                transform: hovered ? "translateY(0)" : "translateY(6px)",
                transition: "transform 0.25s ease",
                display: "inline-block",
              }}
            >
              Visit site →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function WhatIDoSection() {
  const [ref, visible] = useInView();

  return (
    <section
      id="work"
      ref={ref}
      style={{
        padding: "clamp(5rem, 12vw, 10rem) clamp(1.5rem, 6vw, 6rem)",
        borderTop: "1px solid #2a2825",
      }}
    >
      {/* Section label */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#6b6560",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        What I Do
      </p>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1px 1fr",
          gap: "clamp(2rem, 5vw, 5rem)",
          alignItems: "start",
        }}
        className="what-i-do-grid"
      >
        {/* Left: Day Job */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#d4a853",
              marginBottom: "1.25rem",
            }}
          >
            Day Job
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#f0ede6",
              margin: "0 0 1.5rem 0",
              letterSpacing: "-0.01em",
            }}
          >
            AI Solutions Engineer
            <br />
            <span style={{ color: "#f0ede6", fontStyle: "italic" }}>
              Hardshell
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              lineHeight: 1.8,
              color: "#d4d0c8",
              maxWidth: "38ch",
            }}
          >
            Hardshell secures the data layer of AI systems. As an AI Solutions
            Engineer, I work both sides of the deal: helping customers
            technically integrate the platform, and sourcing new pilot
            opportunities as the company builds out its go-to-market motion
            post pre-seed.
          </p>

          <BrowserMockup
            url="https://hardshell.ai"
            domain="hardshell.ai"
            src="https://d2mfd276veu1rs.cloudfront.net/hardshell-website.webp"
            alt="Hardshell website"
            accentColor="#0e9453"
          />
        </div>

        {/* Vertical rule */}
        <div
          style={{
            width: "1px",
            backgroundColor: "#d4a853",
            opacity: 0.4,
            alignSelf: "stretch",
            minHeight: "12rem",
          }}
          className="what-i-do-divider"
        />

        {/* Right: Side Build */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#d4a853",
              marginBottom: "1.25rem",
            }}
          >
            Side Build
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#f0ede6",
              margin: "0 0 1.5rem 0",
              letterSpacing: "-0.01em",
            }}
          >
            Founder
            <br />
            <span style={{ color: "#f0ede6", fontStyle: "italic" }}>
              StorybookYou</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              lineHeight: 1.8,
              color: "#d4d0c8",
              maxWidth: "38ch",
            }}
          >
            I create custom children&apos;s books by using AI image models to illustrate families directly into the story based on a photo. We customize, print, and ship storybooks internationally. Founded 2025 — on track to create
            thousands of books and break six figures in revenue in 2026.
          </p>

          <BrowserMockup
            url="https://storybookyou.com"
            domain="storybookyou.com"
            src="https://d2mfd276veu1rs.cloudfront.net/storybookyou-website.webp"
            alt="StorybookYou website"
            accentColor="#5c40b0"
          />
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .what-i-do-grid {
            grid-template-columns: 1fr !important;
          }
          .what-i-do-divider {
            width: 100% !important;
            height: 1px !important;
            min-height: unset !important;
            align-self: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
