"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-header", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: ref.current, start: "top 80%" } });
      gsap.fromTo(".contact-form", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: ref.current, start: "top 75%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
      setStatus("error");
    }
  };

  return (
    <section ref={ref} id="contact" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[150px]" />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <div className="contact-header text-center">
          <span className="inline-block rounded-full border border-accent-warm/30 bg-accent-warm/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-warm">Contact</span>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Let&apos;s Connect</h2>
          <p className="mt-4 text-lg text-text-secondary">Interested in partnering, investing, or learning more? Reach out and we&apos;ll get back to you.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form mt-12 space-y-5 rounded-2xl border border-glass-border bg-glass p-8 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-text-secondary">Name</label>
              <input id="contact-name" name="name" required className="form-input" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-text-secondary">Email</label>
              <input id="contact-email" name="email" type="email" required className="form-input" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-text-secondary">Subject</label>
            <input id="contact-subject" name="subject" required className="form-input" placeholder="What's this about?" />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-text-secondary">Message</label>
            <textarea id="contact-message" name="message" required rows={5} className="form-input resize-none" placeholder="Tell us more..." />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group relative w-full cursor-pointer overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-light py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">
              {status === "sending" ? "Sending..." : status === "success" ? "✓ Sent Successfully!" : "Send Message"}
            </span>
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-accent font-medium animate-[fade-in-up_0.3s_ease]">Thank you! We&apos;ll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400 font-medium animate-[fade-in-up_0.3s_ease]">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
