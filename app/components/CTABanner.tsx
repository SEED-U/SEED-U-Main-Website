"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="cta-content relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-dark to-primary p-10 sm:p-16 text-center animate-gradient">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 h-full w-full opacity-10">
            <div className="absolute top-4 left-8 h-32 w-32 rounded-full border border-white/20" />
            <div className="absolute bottom-4 right-12 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute top-1/2 left-1/3 h-20 w-20 rounded-full bg-white/5" />
          </div>

          <div className="relative z-10">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Ready to Build AI That Speaks India?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
              Join us in creating the linguistic infrastructure that will power the next generation of AI — for every language, every dialect, every voice.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="cursor-pointer rounded-full bg-white px-8 py-3 text-base font-semibold text-primary shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Partner With Us
              </button>
              <button
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                className="cursor-pointer rounded-full border-2 border-white/30 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-105 active:scale-95"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
