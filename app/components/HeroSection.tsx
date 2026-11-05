"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import IndiaMap from "./IndiaMap";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.4",
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      {/* <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[100px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary-dark/10 blur-[150px]" /> */}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated India Map */}
      <IndiaMap />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:-mt-50 lg:px-8">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-light backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Building India&apos;s AI Future
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="relative font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {/* Responsive glow background */}
          <div className="absolute left-1/2 top-6 -z-10 h-[120px] w-[220px] -translate-x-1/2 rounded-full bg-[#D4673D]/25 blur-[60px] sm:h-[160px] sm:w-[320px] md:h-[200px] md:w-[420px] lg:left-[52%] lg:top-2 lg:h-[220px] lg:w-[520px] lg:blur-[90px]" />
          India&apos;s First {/* Linguistic OS Badge */}
          <span className="relative inline-flex items-center justify-center border border-[#D4673D] px-4 py-1 text-nowrap">
            {/* Corner dots */}
            <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-white border border-[#D4673D]" />
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white border border-[#D4673D]" />
            <span className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-white border border-[#D4673D]" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-white border border-[#D4673D]" />
            Linguistic OS
          </span>
          <br />
          <span className="text-text-secondary text-[0.65em] font-normal leading-relaxed">
            AI that truly speaks every Indian language
          </span>
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl"
        >
          Verified multilingual datasets. Hallucination minimized RAG infrastructure.
          A data-first ecosystem powering AI for{" "}
          <span className="text-accent-warm font-medium">
            22+ regional languages
          </span>{" "}
          and{" "}
          <span className="text-accent-warm font-medium">
            1.4 billion voices
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            onClick={() => scrollTo("#about")}
            className="group relative cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary-light px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Explore Our Vision</span>
          </button>

          <button
            onClick={() => scrollTo("#contact")}
            className="group cursor-pointer rounded-full border border-glass-border px-8 py-3.5 text-base font-semibold text-text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:scale-105 active:scale-95"
          >
            Get Early Access
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-glass-border pt-8">
          {[
            { value: "22+", label: "Languages" },
            { value: "500M+", label: "Users Underserved" },
            { value: "95%", label: "AI Data Gap" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold font-heading sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-text-muted sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-text-muted">Scroll</span>
        <div className="cursor-pointer" onClick={() => scrollTo("#about")}>
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
