"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";

const principals = [
  {
    role: "Direction · Visuals",
    name: "Bhoye Visuals",
    location: "Chicago, IL",
    bio: "A commercial and editorial photographer with a decade of work across luxury real estate, fashion, and music. Has shot for WHO, Martell, and Rivian.",
  },
  {
    role: "Direction · Engineering",
    name: "Jay.dev",
    location: "Lagos, NG",
    bio: "A full-stack engineer building bespoke commerce, automation, and brand systems for premium clients. Specializes in performance-first Next.js architectures and headless e-commerce.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-48 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
      {/* Section index */}
      <div className="flex items-center gap-4 mb-20 text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)]">
        <span className="text-[var(--color-accent)]">01</span>
        <span className="block w-12 h-px bg-[var(--color-line-strong)]" />
        About
      </div>

      {/* Manifesto */}
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-32">
        <div className="col-span-12 md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)] mb-4">
            Manifesto
          </p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--color-ink)]">
            <AnimatedLine>Two disciplines, one</AnimatedLine>
            <br />
            <AnimatedLine
              delay={0.1}
              className="italic text-[var(--color-accent)]"
            >
              standard.
            </AnimatedLine>
            <br />
            <AnimatedLine delay={0.2} className="text-[var(--color-ink-muted)]">
              We make work that
            </AnimatedLine>
            <br />
            <AnimatedLine delay={0.3} className="text-[var(--color-ink-muted)]">
              outlasts the trend cycle.
            </AnimatedLine>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 max-w-2xl text-[var(--color-ink-muted)] text-lg leading-relaxed font-light"
          >
            Frame &amp; Code began as a conversation between a photographer and
            an engineer who kept meeting the same kind of client — discerning,
            ambitious, frustrated by agencies that treated visuals and digital
            as separate problems. We treat them as one.
          </motion.p>
        </div>
      </div>

      {/* Principals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-line-strong)] border border-[var(--color-line-strong)]">
        {principals.map((p) => (
          <motion.div
            key={p.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--color-bg)] p-10 md:p-14"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">
              {p.role}
            </p>
            <h3 className="font-display text-4xl md:text-5xl text-[var(--color-ink)] mb-2">
              {p.name}
            </h3>
            <p className="text-[var(--color-ink-dim)] text-sm uppercase tracking-widest mb-8">
              {p.location}
            </p>
            <p className="text-[var(--color-ink-muted)] leading-relaxed font-light">
              {p.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
