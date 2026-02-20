"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const TYPE_BADGE = {
  shipped: {
    label: "Shipped Product",
    className:
      "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },
  ai: {
    label: "AI Experiment",
    className:
      "bg-orange-50 text-orange-700 border border-orange-200",
  },
  ai_skill: {
    label: "AI Skill",
    className:
      "bg-purple-50 text-purple-700 border border-purple-200",
  }
};

export default function WorkCard({ item, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 + index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const badge = TYPE_BADGE[item.type];
  const link = item.link;
  const backTags = item.achievements || item.technologies || [];
  const backTagsLabel = item.achievements ? "Key Achievements" : "Technologies";

  return (
    <div
      className="group perspective-1000 h-[420px] sm:h-[460px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`,
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ===== FRONT ===== */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Visual header */}
          {item.thumbnail ? (
            <div className="relative h-[52%] w-full overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          ) : (
            <div className="relative h-[38%] w-full bg-gradient-to-br from-orange-50 to-amber-50 flex items-center px-6">
              <div className="flex items-center -space-x-2">
                {item.icons?.map((iconUrl, i) => (
                  <div
                    key={i}
                    className="relative w-11 h-11 rounded-full bg-white shadow-md ring-2 ring-white overflow-hidden"
                    style={{ zIndex: item.icons.length - i }}
                  >
                    <Image
                      src={iconUrl}
                      alt={`${item.title} icon ${i + 1}`}
                      fill
                      className="object-contain p-2"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-full h-full opacity-40"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 60%, rgba(251,146,60,0.15) 60%)",
                }}
              />
            </div>
          )}

          {/* Content */}
          <div className="p-5 sm:p-6 flex flex-col h-[48%]">
            <span
              className={`self-start px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${badge.className}`}
            >
              {badge.label}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-zinc-500 text-sm font-light leading-relaxed flex-grow">
              {item.tagline}
            </p>
            <div className="flex items-center gap-2 text-orange-500 text-sm font-medium mt-3">
              <span>Tap to learn more</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Corner accent (thumbnail cards) */}
          {item.thumbnail && (
            <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
              <div
                className="absolute top-0 right-0 w-full h-full"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 50%, rgba(251,146,60,0.08) 50%)",
                }}
              />
            </div>
          )}
        </div>

        {/* ===== BACK ===== */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.05)]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative h-full p-5 sm:p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between">
              <h3 className="text-xl sm:text-2xl font-semibold text-orange-400 tracking-tight">
                {item.title}
              </h3>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/60 shrink-0 ml-3">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed flex-grow">
              {item.description}
            </p>

            {/* Tags */}
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-3">
                {backTagsLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {backTags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-orange-500/15 border border-orange-500/30 rounded-full text-orange-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Link */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white rounded-lg text-sm font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Corner glow */}
          <div
            className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(251, 146, 60, 0.2)" }}
          />
        </div>
      </div>
    </div>
  );
}
