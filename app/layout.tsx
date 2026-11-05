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
  title: "SEED U — Useful AI for India's Languages and Real-World Contexts",
  description:
    "SEED U is an early-stage initiative developing useful AI for Indian languages and local contexts, starting with Marathi Agriculture AI in Maharashtra.",
  keywords: [
    "SEED U",
    "Marathi AI",
    "Agriculture AI",
    "Maharashtra",
    "Indian Languages",
    "Regional Language AI",
  ],
  openGraph: {
    title: "SEED U — Useful AI for India's Languages and Real-World Contexts",
    description:
      "An early-stage initiative starting with Marathi Agriculture AI in Maharashtra.",
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
