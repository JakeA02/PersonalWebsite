import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  title: "Jake Adler | Builder & Founder",
  description: "I build 0-to-1 solutions for complex problems.",
  openGraph: {
    title: "Jake Adler | Builder & Founder",
    description: "I build 0-to-1 solutions for complex problems.",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1400,
        height: 900,
        alt: "Jake Adler | Builder & Founder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
