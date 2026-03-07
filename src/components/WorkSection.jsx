"use client";

import { useState, useEffect } from "react";
import WorkCard from "./WorkCard";
import { WORK } from "@/data/work";

const TABS = [
  { id: "all", label: "All" },
  { id: "shipped", label: "Startups & Products" },
  { id: "ai", label: "AI Experiments" },
  // { id: "ai_skill", label: "AI Skills" },
];

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSectionVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("work-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const filtered =
    activeTab === "all" ? WORK : WORK.filter((item) => item.type === activeTab);

  return (
    <section
      id="work-section"
      className="py-20 sm:py-28 px-6 bg-gradient-to-b from-[#fffbf7] to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-10 sm:mb-12"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-3">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight">
            What I&apos;ve{" "}
            <span className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Built
            </span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg max-w-xl mx-auto">
            From shipped products to AI experiments and skills
          </p>
        </div>

        {/* Tab Filter */}
        <div
          className="flex justify-center mb-12 sm:mb-14"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
          }}
        >
          <div className="inline-flex items-center bg-zinc-100 rounded-full p-1 gap-0.5">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, index) => (
            <WorkCard key={`${activeTab}-${item.id}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
