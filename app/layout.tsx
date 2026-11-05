import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEED U — India's First Linguistic OS | AI for Regional Languages",
  description:
    "SEED U is building India's first linguistic operating system — verified multilingual datasets, zero-hallucination RAG infrastructure, and a data-first AI ecosystem for 22+ regional languages.",
  keywords: [
    "SEED U",
    "Linguistic OS",
    "India AI",
    "Regional Languages",
    "Multilingual AI",
    "RAG Infrastructure",
    "NLP India",
  ],
  openGraph: {
    title: "SEED U — India's First Linguistic OS",
    description:
      "Building AI infrastructure for India's regional languages and cultural intelligence.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-bg text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
