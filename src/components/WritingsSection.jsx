"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function ArticleCard({ article, index }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 + index * 80);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12),0_0_0_1px_rgba(251,146,60,0.15)] transition-all duration-300 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s, box-shadow 0.3s ease, translate 0.3s ease`,
      }}
    >
      {/* Cover image */}
      {article.image ? (
        <div className="relative w-full h-44 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 shrink-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      ) : (
        <div className="w-full h-32 bg-gradient-to-br from-orange-50 to-amber-50 shrink-0" />
      )}

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        {/* Date */}
        {article.date && (
          <span className="text-xs font-medium text-orange-500 uppercase tracking-widest mb-3">
            {article.date}
          </span>
        )}

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 tracking-tight leading-snug group-hover:text-orange-600 transition-colors duration-200 mb-3">
          {article.title}
        </h3>

        {/* Excerpt */}
        {article.excerpt && (
          <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
            {article.excerpt}
          </p>
        )}

        {/* Read link */}
        <div className="flex items-center gap-1.5 text-orange-500 text-sm font-medium mt-5 group-hover:gap-2.5 transition-all duration-200">
          <span>Read on Substack</span>
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}

function SkeletonCard({ index }) {
  return (
    <div
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] animate-pulse"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-full h-44 bg-zinc-100 shrink-0" />
      <div className="p-6">
        <div className="h-3 w-24 bg-orange-100 rounded-full mb-3" />
        <div className="h-5 w-3/4 bg-zinc-100 rounded-lg mb-2" />
        <div className="h-5 w-1/2 bg-zinc-100 rounded-lg mb-4" />
        <div className="space-y-2">
          <div className="h-3.5 w-full bg-zinc-50 rounded" />
          <div className="h-3.5 w-5/6 bg-zinc-50 rounded" />
          <div className="h-3.5 w-4/6 bg-zinc-50 rounded" />
        </div>
        <div className="h-3 w-28 bg-orange-50 rounded-full mt-5" />
      </div>
    </div>
  );
}

export default function WritingsSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSectionVisible(true);
      },
      { threshold: 0.05 }
    );
    const section = document.getElementById("writings-section");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch("/api/writings")
      .then((r) => r.json())
      .then(({ articles }) => {
        setArticles(articles.slice(0, 3) || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section
      id="writings-section"
      className="py-20 sm:py-28 px-6 bg-gradient-to-b from-white to-[#fffbf7]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-10 sm:mb-14"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-3">
            Writings
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight">
            What I&apos;m{" "}
            <span className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Thinking
            </span>
          </h2>
          <p className="mt-4 text-zinc-500 text-lg max-w-xl mx-auto">
            Essays on building, AI, and the future
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} index={i} />
              ))
            : articles.map((article, i) => (
                <ArticleCard key={article.link} article={article} index={i} />
              ))}
        </div>

        {/* View all CTA */}
        {!loading && articles.length > 0 && (
          <div
            className="flex justify-center mt-12"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.4s",
            }}
          >
            <a
              href="https://thejakeadler.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 bg-white text-zinc-700 text-sm font-medium hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 shadow-sm"
            >
              View all on Substack
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
          </div>
        )}
      </div>
    </section>
  );
}
