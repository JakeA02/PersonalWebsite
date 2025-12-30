"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { JOURNEY_MILESTONES } from "@/data/journey";

// =============================================================================
// TIMELINE NODE COMPONENT
// =============================================================================
function TimelineNode({ milestone, index, isVisible }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start gap-4 md:gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.12}s`,
      }}
    >
      {/* Timeline connector - visible on md+ */}
      <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-0 h-full z-10">
        {/* Node dot */}
        <div
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${milestone.accent} shadow-lg ring-4 ring-white`}
          style={{
            boxShadow: `0 0 20px rgba(251, 146, 60, 0.3)`,
          }}
        />
        {/* Connecting line */}
        {index < JOURNEY_MILESTONES.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-orange-200 to-orange-100 mt-2" />
        )}
      </div>

      {/* Mobile timeline dot */}
      <div className="md:hidden flex flex-col items-center pt-1">
        <div
          className={`w-3 h-3 rounded-full bg-gradient-to-br ${milestone.accent} shadow-md ring-2 ring-white flex-shrink-0`}
        />
        {index < JOURNEY_MILESTONES.length - 1 && (
          <div className="w-0.5 flex-1 min-h-[20px] bg-gradient-to-b from-orange-200 to-orange-100 mt-2" />
        )}
      </div>

      {/* Content card */}
      <div
        className={`flex-1 md:w-[calc(50%-2rem)] ${
          isEven ? "md:pr-12" : "md:pl-12"
        }`}
      >
        <div
          className={`group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)] transition-shadow duration-300 ${
            milestone.isCurrent ? "ring-2 ring-orange-400/50" : ""
          }`}
        >
          {/* Image placeholder */}
          <div className="relative h-32 sm:h-40 w-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-50">
            {/* Gradient overlay for placeholder feel */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${milestone.accent} opacity-10`}
            />
            {/* Placeholder pattern */}
            {/* Image - uncomment when you have real images */}
            {<Image
              src={milestone.image}
              alt={milestone.phase}
              fill
              className="object-cover"
              unoptimized
            /> }
            
            {/* Phase badge */}
            <div className="absolute top-3 left-3">
              <span
                className={`px-3 py-1 bg-gradient-to-r ${milestone.accent} text-white text-xs font-semibold rounded-full shadow-md`}
              >
                {milestone.phase}
              </span>
            </div>

            {/* Date badge */}
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-zinc-600 text-xs font-medium rounded-full shadow-sm">
                {milestone.date}
              </span>
            </div>

            {/* Current indicator */}
            {milestone.isCurrent && (
              <div className="absolute bottom-3 right-3">
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-orange-500 text-white text-xs font-medium rounded-full shadow-md">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Current
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Headline */}
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 tracking-tight leading-snug">
              {milestone.headline}
            </h3>

            {/* Stat highlight */}
            <div className="mt-3 flex items-baseline gap-2">
              <span
                className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${milestone.accent} bg-clip-text text-transparent`}
              >
                {milestone.stat.value}
              </span>
              <span className="text-sm text-zinc-400 font-medium">
                {milestone.stat.label}
              </span>
            </div>

            {/* Expandable details */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center gap-2 text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors"
            >
              <span>{expanded ? "Show less" : "Key details"}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Key points - expandable */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                expanded ? "max-h-48 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-2">
                {milestone.keyPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-zinc-600"
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${milestone.accent} flex-shrink-0`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for alternating layout on desktop */}
      <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
    </div>
  );
}

// =============================================================================
// JOURNEY SECTION COMPONENT
// =============================================================================
export default function JourneySection() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey-section"
      className="py-20 sm:py-28 px-6 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-16 sm:mb-20"
          data-index="-1"
          style={{
            opacity: visibleItems.has(-1) ? 1 : 0,
            transform: visibleItems.has(-1)
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-3">
            The Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight">
            How I Got{" "}
            <span className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Here
            </span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg max-w-xl mx-auto">
            From classroom to launch day — building at the intersection of tech
            and human connection
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-100 -translate-x-1/2" />

          {/* Timeline items - stacked with overlap */}
          <div className="relative">
            {JOURNEY_MILESTONES.map((milestone, index) => (
              <div
                key={milestone.id}
                data-index={index}
                className={index > 0 ? "mt-4 md:-mt-24" : ""}
                style={{ position: "relative", zIndex: index + 1 }}
              >
                <TimelineNode
                  milestone={milestone}
                  index={index}
                  isVisible={visibleItems.has(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Contact Section */}
       
      </div>
    </section>
  );
}

