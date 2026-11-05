"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const currentStatus = [
  "We have developed an initial RAG-based technical prototype and a Telegram bot.",
  "This is not yet a complete agricultural advisory system or a product ready for large-scale use.",
  "The current sample data is limited. It is not a comprehensive agricultural knowledge base or an expert-validated dataset.",
];

const nextSteps = [
  "Understand farmers' actual needs",
  "Identify an appropriate problem to focus on",
  "Evaluate permitted data sources",
  "Gather input from agriculture experts",
  "Assess quality and reliability",
];

export default function FocusSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".focus-header",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ref.current, start: "top 80%" } },
      );
      gsap.fromTo(
        ".focus-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: ".focus-grid", start: "top 85%" } },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="focus" className="relative py-24 sm:py-32">
      <div className="absolute top-1/3 left-0 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="focus-header mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Current Focus
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Marathi Agriculture AI in Maharashtra
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            This is the first area SEED U has chosen to focus on. Our aim is not
            simply to build a generic Marathi chatbot, but to understand real
            local needs and evaluate where reliable AI assistance could genuinely
            help.
          </p>
        </div>

        <div className="focus-grid mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Where we are today */}
          <div className="focus-card rounded-2xl border border-glass-border bg-glass p-8">
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              Where we are today
            </h3>
            <ul className="mt-5 space-y-4">
              {currentStatus.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-light" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What comes next */}
          <div className="focus-card rounded-2xl border border-glass-border bg-glass p-8">
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              What comes next
            </h3>
            <ol className="mt-5 space-y-3">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-heading text-xs font-semibold text-primary-light">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
