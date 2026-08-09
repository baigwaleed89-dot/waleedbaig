import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.bio,
  keywords: [
    "Software Engineer Portfolio",
    "Principal Full-Stack Engineer",
    "Systems Architect",
    "Next.js App Router",
    "TypeScript",
    "Tailwind CSS",
    "Distributed Systems",
    "Web Performance"
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.bio,
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.bio
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#090d16] text-slate-100 font-sans antialiased min-h-screen selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
