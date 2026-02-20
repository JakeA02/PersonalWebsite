// =============================================================================
// WORK DATA - All projects and AI experiments in one place
// type: "shipped" = real products with users/revenue
// type: "ai"      = AI experiments and explorations
// =============================================================================
export const WORK = [
  // ── Shipped Products ────────────────────────────────────────────────────────
  {
    id: "storybookyou",
    type: "shipped",
    title: "StorybookYou",
    tagline:
      "Empowering children to become the heroes of their own stories through personalized generative AI illustrations.",
    thumbnail: "/images/showcase.png",
    description:
      "Founded and scaled a D2C venture that leverages AI to illustrate children directly into high-quality storybooks. Executed a rapid-to-market strategy, achieving over 100 sales in the first two weeks of November 2025. Currently managing growth as a side hustle.",
    achievements: ["$10K Non-Dilutive Funding", "130+ Units Sold"],
    link: "https://StorybookYou.com",
  },
  {
    id: "smsc",
    type: "shipped",
    title: "SaveMoneySupportCreators",
    tagline:
      "Automating the discovery and aggregation of creator-specific discount codes from across the YouTube ecosystem.",
    thumbnail: "/images/SMSC.png",
    description:
      "Architected a fully automated data pipeline using Python and LLMs to extract promotional data from thousands of video descriptions. The platform provides a high-fidelity interface for users to save money while supporting creators.",
    achievements: ["GitHub Actions", "LLM-Powered Data Extraction"],
    link: "https://savemoneysupportcreators.com",
  },
  {
    id: "pixel-art-ticker",
    type: "shipped",
    title: "Pixel Art Stock Ticker",
    tagline:
      "Bridging the gap between live market data and custom IoT hardware through animated pixel art.",
    thumbnail: "/images/friedberg.png",
    description:
      "Engineered a custom IoT device by architecting a React/TypeScript dashboard on a Raspberry Pi 4. Built using Airbnb's VISX and the Finnhub API to render real-time market movements and integrated with frame-by-frame pixel art animations.",
    achievements: ["IoT Hardware Integration", "Real-Time Data Visualization"],
    link: "https://all-in-ticker.vercel.app",
  },

  // ── AI Experiments ───────────────────────────────────────────────────────────
  {
    id: "virtual-try-on",
    type: "ai",
    title: "Virtual Try-On Extension",
    tagline: "Nano-Banana powered Chrome extension for virtual fashion",
    icons: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sSeQqjaUTuZ3gRgkKjidpaipF_l6s72lBw&s",
      "https://miro.medium.com/v2/resize:fit:1076/0*Xx3WhHdyXHm14pt4.png",
    ],
    description:
      "Built a Chrome extension using Nano-Banana for virtual try-on experiences. Adds a 'Try Me On' button to any image, allowing users to visualize clothing and accessories in real-time through their browser. Google and Amazon later implemented their own versions :).",
    technologies: ["Nano-Banana", "Chrome Extension", "JavaScript"],
    link: "https://github.com/JakeA02/try-me-on-extension",
  },
  {
    id: "nlp-flashcard",
    type: "ai",
    title: "NLP Flashcard App",
    tagline: "AI-powered spaced repetition learning with Mochi API",
    icons: [
      "https://play-lh.googleusercontent.com/52sEhLAJElKj7Z7yqJYIMhw1a7GZcv_wkZhQbxhUYhW-LIyg3FwRyM8UgXJgVQaBnIE",
      "https://www.nan.xyz/wp-content/uploads/grok-seeklogo-.svg",
    ],
    description:
      "Developed an intelligent flashcard application that transforms questions, statements, or facts into 3-tiered flashcards using NLP. Integrated with Mochi API to create optimized spaced repetition study materials automatically.",
    technologies: ["Mochi API", "NLP", "Prompt Engineering", "JSON"],
    link: "https://github.com/JakeA02/recall_me",
  },
  {
    id: "news-feed",
    type: "ai",
    title: "Continuous News Feed",
    tagline: "Live news articles that allow follow-up questions and deep-dives",
    icons: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnze6t-thGVKlIKNKF9zeiTfaoxLdYdVzX0g&s",
      "https://www.discovertec.com/media/1164/rss-feeds-amll.png",
    ],
    description:
      "Developed an AI-first news site demo that allows users to ask or select follow-up questions for deep-dives and additional context. Integrated with RSS Feeds and the Groq API to surface the latest news with fast AI-generated responses.",
    technologies: ["Groq API", "RSS Feeds"],
    link: "https://github.com/JakeA02/branching_news",
  },
  {
    id: "openclaw",
    type: "ai_skill",
    title: "Openclaw Configuration",
    tagline: "Personal AI agent setup and deployment",
    icons: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aMJZbw3yJdHLT5unwsN4adii3fwyirCEVg&s",
    ],
    description:
      "Configured and deployed my personal Openclaw instance (aka. 'Leo'). Focused on suggesting articles and research based on my interests and preferences, as well as tracking health goals.",
    technologies: ["Openclaw", "AI Agents"],
    link: "https://github.com/openclaw/openclaw",
  },
  {
    id: "agentic-coding",
    type: "ai_skill",
    title: "Agentic Coding",
    tagline: "AI-powered development workflow and code generation",
    icons: [
      "https://brandlogos.net/wp-content/uploads/2025/04/cursor_code_editor-logo_brandlogos.net_r1yfy.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NAHBHbG_tj_AFFrJGCKAWEPDRtvFL28sug&s",
    ],
    description:
      "Extensive experience with AI-assisted development tools including Cursor, Codex, and Claude Code. Leveraging agentic coding patterns to accelerate development, improve code quality, and explore novel solutions to complex problems.",
    technologies: ["Cursor", "Codex", "Claude Code", "AI-First Development"],
    link: null,
  },
  {
    id: "Prompt Engineering",
    type: "ai_skill",
    title: "Prompt Engineering",
    tagline: "AI-powered prompt engineering and optimization",
    icons: [
      "https://logo.promptengineering.rocks/assets/prompt-engineering-logo.png",
    ],
    description:
      "Extensive experience with prompt engineering and optimization across modalities, including text, images, and audio.",
    technologies: ["Prompt Engineering"],
    link: null,
  }
];
