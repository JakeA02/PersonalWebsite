"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AICard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 + index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className="group h-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`,
      }}
    >
      <div
        className={`relative h-full bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col ${
          isExpanded ? "ring-2 ring-orange-400/50" : ""
        }`}
      >
        {/* Header with icon */}
        <div className="relative p-6 pb-4 bg-gradient-to-br from-orange-50 to-amber-50">
          {/* Icon and GitHub */}
          <div className="flex items-start justify-between mb-3">
            {/* Overlapping profile pictures */}
            <div className="flex items-center -space-x-2 mb-2">
              {project.icons.map((iconUrl, i) => (
                <div
                  key={i}
                  className="relative w-10 h-10 rounded-full bg-white shadow-md ring-2 ring-white overflow-hidden transition-transform hover:scale-110 hover:z-10"
                  style={{
                    zIndex: project.icons.length - i,
                  }}
                >
                  <Image
                    src={iconUrl}
                    alt={`${project.title} icon ${i + 1}`}
                    fill
                    className="object-contain p-1.5"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* GitHub link */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-sm hover:shadow-md transition-all group/github"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-5 h-5 text-zinc-700 group-hover/github:text-zinc-900 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Title and tagline */}
          <h3 className="text-xl font-semibold text-zinc-900 tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-zinc-600 text-sm font-light leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 pt-4 flex-grow flex flex-col">
          {/* Impact badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-100 rounded-full text-orange-700 text-xs font-medium">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              {project.impact}
            </span>
          </div>

          {/* Description - expandable */}
          <div className="flex-grow">
            <p
              className={`text-zinc-600 text-sm leading-relaxed transition-all duration-300 ${
                isExpanded ? "" : "line-clamp-3"
              }`}
            >
              {project.description}
            </p>
          </div>

          {/* Expand/collapse button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-2 text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors self-start"
          >
            <span>{isExpanded ? "Show less" : "Read more"}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
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

          {/* Technologies - show when expanded */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-32 mt-4 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-zinc-100 border border-zinc-200 rounded-md text-zinc-700 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none overflow-hidden rounded-tr-2xl">
          <div
            className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(135deg, transparent 50%, rgba(251,146,60,0.1) 50%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
