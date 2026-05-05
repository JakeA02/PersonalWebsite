"use client";

import { useState, useEffect, useRef } from "react";

function useInView(threshold = 0.1) {
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

function ArticleRow({ article, index, parentVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "baseline",
        gap: "1.5rem",
        padding: "1.75rem 0",
        borderBottom: "1px solid #2a2825",
        textDecoration: "none",
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${0.05 + index * 0.07}s, transform 0.5s ease ${0.05 + index * 0.07}s`,
        cursor: "pointer",
      }}
    >
      {/* Left: title + excerpt */}
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: hovered ? "#d4a853" : "#f0ede6",
            margin: "0 0 0.5rem 0",
            letterSpacing: "-0.01em",
            transition: "color 0.2s ease",
          }}
        >
          {article.title}
        </h3>
        {article.excerpt && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              lineHeight: 1.7,
              color: "#a8a49c",
              margin: 0,
              maxWidth: "60ch",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.excerpt}
          </p>
        )}
      </div>

      {/* Right: date + arrow */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0.5rem",
          flexShrink: 0,
        }}
      >
        {article.date && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.06em",
              color: "#f0ede6",
              whiteSpace: "nowrap",
            }}
          >
            {article.date}
          </span>
        )}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: hovered ? "#d4a853" : "#3a3835",
            transition: "color 0.2s ease, transform 0.2s ease",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
            display: "inline-block",
          }}
        >
          →
        </span>
      </div>
    </a>
  );
}

function SkeletonRow({ index }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "baseline",
        gap: "1.5rem",
        padding: "1.75rem 0",
        borderBottom: "1px solid #2a2825",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div>
        <div
          style={{
            height: "1.4rem",
            width: "55%",
            backgroundColor: "#1e1c1a",
            borderRadius: "2px",
            marginBottom: "0.6rem",
          }}
        />
        <div
          style={{
            height: "0.7rem",
            width: "80%",
            backgroundColor: "#1a1815",
            borderRadius: "2px",
          }}
        />
      </div>
      <div
        style={{
          height: "0.65rem",
          width: "4rem",
          backgroundColor: "#1a1815",
          borderRadius: "2px",
        }}
      />
    </div>
  );
}

export default function WritingsSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ref, visible] = useInView();

  useEffect(() => {
    fetch("/api/writings")
      .then((r) => r.json())
      .then(({ articles }) => {
        setArticles((articles || []).slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section
      id="writing"
      ref={ref}
      style={{
        padding: "clamp(5rem, 12vw, 10rem) clamp(1.5rem, 6vw, 6rem)",
        borderTop: "1px solid #2a2825",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          flexWrap: "wrap",
          gap: "1rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6b6560",
            margin: 0,
          }}
        >
          Writing
        </p>
      </div>

      {/* Article list */}
      <div
        style={{
          borderTop: "1px solid #2a2825",
        }}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <SkeletonRow key={i} index={i} />
            ))
          : articles.map((article, i) => (
              <ArticleRow
                key={article.link}
                article={article}
                index={i}
                parentVisible={visible}
              />
            ))}
      </div>

      {/* Substack link */}
      {!loading && articles.length > 0 && (
        <div
          style={{
            marginTop: "2.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
          }}
        >
          <a
            href="https://thejakeadler.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              color: "#6b6560",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4a853")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6560")}
          >
            All posts on Substack →
          </a>
        </div>
      )}
    </section>
  );
}
