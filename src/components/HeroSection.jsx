"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#fffbf7] overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/50 to-rose-50/30" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right warm blob */}
        <div
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full blur-[60px]"
          style={{
            background:
              "radial-gradient(circle, rgba(251, 146, 60, 0.25), transparent 60%)",
            transform: loaded ? "translate(0, 0)" : "translate(40px, -40px)",
            transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        {/* Bottom-left peachy blob */}
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[50px]"
          style={{
            background:
              "radial-gradient(circle, rgba(253, 186, 116, 0.3), transparent 60%)",
            transform: loaded ? "translate(0, 0)" : "translate(-40px, 40px)",
            transition: "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
          }}
        />
        {/* Center soft glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(254, 215, 170, 0.4), transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 max-w-4xl mx-auto">
        {/* Hero Photo with shimmer border */}
        <div
          className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scale(1)" : "scale(0.95)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Shimmer border background */}
          <div
            className="absolute -inset-[3px] rounded-full animate-[shimmer_3s_ease-in-out_infinite]"
            style={{
              background:
                "linear-gradient(135deg, #fed7aa, #fdba74, #fb923c, #fed7aa)",
            }}
          />
          {/* Photo container */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_6px_-1px_rgba(0,0,0,0.05),0_20px_40px_-8px_rgba(234,88,12,0.15),0_40px_80px_-20px_rgba(251,146,60,0.2)]">
            <Image
              src="/images/speaking.png"
              alt="Jake Adler"
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h1
            className="font-sans text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-zinc-900"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
            }}
          >
            Jake{" "}
            <span className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
              Adler
            </span>
          </h1>

          <p
            className="mt-6 text-xl sm:text-2xl md:text-3xl text-zinc-400 font-light tracking-tight max-w-2xl"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
            }}
          >
             I build <span className="text-zinc-800 font-medium">0-to-1 solutions </span> for {" "}
            <span className="text-zinc-800 font-medium"> complex problems</span>
          </p>

          {/* CTA Strip */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.45s",
            }}
          >
            <a
              href="mailto:jakeadler02@gmail.com"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full transition-all duration-200 font-medium shadow-lg shadow-zinc-900/20 hover:shadow-xl hover:shadow-zinc-900/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in touch
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://x.com/thejakeadler"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200/80 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 hover:bg-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                aria-label="X (Twitter)"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/adlerjake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200/80 text-zinc-600 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <svg
          className="w-6 h-6 text-zinc-400 hover:text-orange-500 transition-colors"
          style={{
            animation: "gentleBounce 2s ease-in-out infinite",
          }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <style jsx>{`
          @keyframes gentleBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
        `}</style>
      </div>
    </section>
  );
}

