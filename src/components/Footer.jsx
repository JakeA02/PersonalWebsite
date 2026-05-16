"use client";

import { useState } from "react";

const LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/adlerjake" },
  { label: "GitHub", href: "https://github.com/JakeA02" },
  { label: "Substack", href: "https://thejakeadler.substack.com" },
];

const PHOTO_TREATMENT = "sepia(10%) saturate(65%) brightness(0.87) contrast(1.06)";

export default function Footer() {
  const [emailHovered, setEmailHovered] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(true);

  return (
    <footer
      id="contact"
      style={{
        padding: "clamp(4rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem) clamp(2.5rem, 5vw, 4rem)",
        borderTop: "1px solid #2a2825",
      }}
    >
      {/* Name row — with small candid photo */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1.5rem",
          marginBottom: "1.75rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 400,
            color: "#f0ede6",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Jake Adler
        </p>


        {photoVisible && (
          <div
            style={{
              width: "52px",
              height: "64px",
              flexShrink: 0,
              border: "1px solid #2a2825",
              overflow: "hidden",
              lineHeight: 0,
              marginTop: "2px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://d2mfd276veu1rs.cloudfront.net/headshot.webp"
              alt="Jake Adler"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                filter: PHOTO_TREATMENT,
              }}
              onError={() => setPhotoVisible(false)}
            />
          </div>
        )}
      </div>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.78rem",
          lineHeight: 1.6,
          color: "#b8b4ac",
          margin: "0 0 2rem 0",
          maxWidth: "36ch",
        }}
      >
        I&apos;m always open to interesting conversations.
      </p>

      {/* Contact links */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(1rem, 3vw, 2rem)",
          alignItems: "center",
          marginBottom: "2.5rem",
        }}
      >
        <a
          href="mailto:jakeadler02@gmail.com"
          className="hover-underline"
          onMouseEnter={() => setEmailHovered(true)}
          onMouseLeave={() => setEmailHovered(false)}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: emailHovered ? "#d4a853" : "#c4c0b8",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
        >
          jakeadler02@gmail.com
        </a>

        <span style={{ color: "#2a2825", fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
          /
        </span>

        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "#c4c0b8",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a853")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#c4c0b8")}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          letterSpacing: "0.06em",
          color: "#3a3835",
          margin: 0,
        }}
      >
        &copy; {new Date().getFullYear()} Jake Adler
      </p>
    </footer>
  );
}
