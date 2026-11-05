"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Regional Language AI Gap",
    description:
      "95% of India's AI data infrastructure caters only to English. Hundreds of millions of people who speak Tamil, Bengali, Telugu, Marathi, and other languages are left without culturally-aware AI tools.",
    gradient: "from-red-500/20 to-orange-500/20",
    borderColor: "group-hover:border-red-500/30",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Verified Multilingual Datasets",
    description:
      "We curate, verify, and structure datasets across 22+ Indian languages — with native speaker validation, dialect coverage, and cultural context that generic scraping can never capture.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/30",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Hallucination minimized RAG",
    description:
      "Our Retrieval-Augmented Generation infrastructure is built from the ground up for factual accuracy — grounded in verified data, with built-in guardrails against hallucinations in every language.",
    gradient: "from-orange-500/20 to-amber-500/20",
    borderColor: "group-hover:border-orange-500/30",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Data-First AI Ecosystem",
    description:
      "We're not building another chatbot. We're building the foundational data layer — the linguistic infrastructure that every Indian AI application will need to work accurately and equitably.",
    gradient: "from-amber-500/20 to-yellow-500/20",
    borderColor: "group-hover:border-amber-500/30",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.fromTo(
        ".about-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards stagger
      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        ".about-stat",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".about-stats",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="about-header mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#D4673D]/30 bg-[#D4673D]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#D4673D]">
            Why SEED U
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The Problem We&apos;re{" "} Solving
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            India has 22 officially recognized languages and over 19,500 dialects.
            Yet AI infrastructure serves barely one. We&apos;re changing that — from the data layer up.
          </p>
        </div>

        {/* Feature Cards */}
        <div ref={cardsRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`about-card group relative overflow-hidden rounded-2xl border border-glass-border bg-glass p-8 transition-all duration-500 hover:border-opacity-50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 ${feature.borderColor}`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-primary-light transition-colors duration-300 group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="about-stats mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
          {[
            { value: "22+", label: "Official Languages", icon: "🗣️" },
            { value: "19,500+", label: "Dialects in India", icon: "🌏" },
            { value: "500M+", label: "Digitally Underserved", icon: "📱" },
            { value: "<5%", label: "AI Data Coverage", icon: "📊" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="about-stat group rounded-2xl border border-glass-border bg-glass p-6 text-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
            >
              <div className="text-2xl">{stat.icon}</div>
              <div className="mt-2 font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-gray-300 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
