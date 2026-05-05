import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const getBaseUrl = () => {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

export const metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: "Jake Adler — AI Engineer & Founder",
  description: "AI Solutions Engineer at Hardshell. Founder of StorybookYou. Building at the intersection of AI and the real world.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/favicon/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/favicon/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    title: "Jake Adler — AI Engineer & Founder",
    description: "AI Solutions Engineer at Hardshell. Founder of StorybookYou. Building at the intersection of AI and the real world.",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1400,
        height: 900,
        alt: "Jake Adler — AI Engineer & Founder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const knowledgePanel = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jake Adler",
    url: "https://jakeadler.dev",
    image: "https://jakeadler.dev/images/speaking.png",
    jobTitle: "AI Solutions Engineer & Founder",
    alumniOf: "University of Virginia",
    sameAs: [
      "https://linkedin.com/in/adlerjake",
      "https://x.com/thejakeadler",
      "https://github.com/JakeA02",
      "https://substack.com/@thejakeadler",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgePanel) }}
        />
      </head>
      <body className={`${cormorant.variable} ${dmMono.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
