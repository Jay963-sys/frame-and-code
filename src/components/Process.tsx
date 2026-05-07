"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";

const phases = [
  {
    number: "01",
    title: "Discovery",
    desc: "We meet, in person where possible. Understanding the brand, the audience, and the ambition before any pixels move.",
  },
  {
    number: "02",
    title: "Direction",
    desc: "A creative brief and technical scope are written together. One document, two disciplines, no surprises.",
  },
  {
    number: "03",
    title: "Production",
    desc: "Visual capture and engineering happen in parallel — not sequentially. Cuts the timeline. Tightens the result.",
  },
  {
    number: "04",
    title: "Delivery",
    desc: "Launch, refinement, and a handover document built for whoever takes the keys after us.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-32 md:py-48 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
      {/* Section index */}
      <div className="flex items-center gap-4 mb-20 text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)]">
        <span className="text-[var(--color-accent)]">04</span>
        <span className="block w-12 h-px bg-[var(--color-line-strong)]" />
        Process
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-24">
        <div className="col-span-12 md:col-span-7">
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-[var(--color-ink)]">
            <AnimatedLine>How we </AnimatedLine>
            <AnimatedLine
              delay={0.1}
              className="italic text-[var(--color-accent)]"
            >
              work.
            </AnimatedLine>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
          <p className="text-[var(--color-ink-muted)] text-sm leading-relaxed">
            A four-phase engagement designed to be transparent, fast, and free
            of agency theatrics.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-line-strong)] border border-[var(--color-line-strong)]">
        {phases.map((phase, i) => (
          <motion.div
            key={phase.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-[var(--color-bg)] p-10 md:p-14"
          >
            <div className="flex items-baseline justify-between mb-8">
              <span className="font-display text-6xl text-[var(--color-accent)] italic">
                {phase.number}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-dim)]">
                Phase
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
              {phase.title}
            </h3>
            <p className="text-[var(--color-ink-muted)] leading-relaxed font-light">
              {phase.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
