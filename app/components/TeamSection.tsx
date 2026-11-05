"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Rihan Khan",
    role: "Founder & CEO",
    bio: "Leads SEED U's priorities and strategy, including problem discovery, field research, documentation, and day-to-day execution.",
    grad: "from-orange-600 to-amber-600",
    linkedInUrl: "https://www.linkedin.com/in/rihan-khan-8b98b93b9",
    imageUrl: "./rehan.png"
  },
  {
    name: "Armaan Dalmia",
    role: "Co-Founder",
    bio: "Supports SEED U as Co-Founder, with a focus on communication and networking.",
    grad: "from-emerald-600 to-teal-600",
    linkedInUrl: "https://www.linkedin.com/in/armaan-dalmia-a30046219",
    imageUrl: "armaan.jpeg"
  },
  {
    name: "Dr. Rajiv Dalmia",
    role: "Strategic Advisor & Mentor",
    bio: "Provides strategic guidance and mentorship to SEED U on governance and business planning.",
    grad: "from-amber-600 to-orange-600",
    linkedInUrl: "https://www.linkedin.com/in/dr-rajiv-dalmia-%F0%9F%8C%9F-3b05672",
    imageUrl: "rajiv.jpeg"
  },
];

export default function TeamSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: { trigger: ".team-grid", start: "top 85%" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="team" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[180px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="team-header mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary-light/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-light">
            Our Team
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The Minds Behind SEED U
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            The people building and guiding SEED U.
          </p>
        </div>
        <div className="team-grid mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="team-card group relative overflow-hidden rounded-2xl border border-glass-border bg-glass p-6 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mx-auto mb-5 relative">
                  <div className="w-24 h-24 flex item-center justify-center mx-auto">
                    <img src={m.imageUrl} alt={m.name} className="mx-auto flex h-24 w-24 items-center justify-center rounded-full" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#D4673D]">
                  {m.role}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                  {m.bio}
                </p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  <a
                    href={m.linkedInUrl}
                    target="_blank"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-text-muted transition-all duration-300 hover:bg-primary/20 hover:text-primary-light"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
