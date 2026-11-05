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
    title: "Language",
    description:
      "Many people are most comfortable finding and using information in their own language. For AI to be useful, it needs to work naturally in Indian languages, not only in English.",
    gradient: "from-red-500/20 to-orange-500/20",
    borderColor: "group-hover:border-red-500/30",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    title: "Local Context",
    description:
      "Practices, seasons, terms, and conditions differ from place to place. Information is most relevant when it reflects the real situation of the people who use it.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/30",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Reliability",
    description:
      "An answer that sounds confident is not enough. We want to understand how AI assistance can stay close to trustworthy sources and be clear about its limits.",
    gradient: "from-orange-500/20 to-amber-500/20",
    borderColor: "group-hover:border-orange-500/30",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    title: "Real Needs First",
    description:
      "Before deciding what to build, we are listening: learning what people actually need and how existing services are already used.",
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
            Why Local Context Matters
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            People look for information in their own language, shaped by where
            they live and work. For AI assistance to be genuinely useful, it has
            to fit that language and context, and be reliable enough to trust.
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
      </div>
    </section>
  );
}
