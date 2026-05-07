"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { digitalPortfolio } from "@/lib/data";
import Image from "next/image";

export default function DigitalPortfolio() {
  const [hovered, setHovered] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spring = { damping: 22, stiffness: 140, mass: 0.4 };
  const sx = useSpring(mouseX, spring);
  const sy = useSpring(mouseY, spring);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 180);
      mouseY.set(e.clientY - 220);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <section
      id="digital"
      className="relative py-32 md:py-48 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
      {/* Floating preview */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[360px] h-[440px] z-[40] overflow-hidden hidden md:block"
        style={{
          x: sx,
          y: sy,
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.92,
        }}
        transition={{ duration: 0.25 }}
      >
        {digitalPortfolio.map((p) => (
          <div
            key={`fl-${p.id}`}
            className={`absolute inset-0 transition-opacity duration-300 ${
              hovered === p.id ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={p.imageUrl} alt={p.title} fill sizes="360px" className="object-cover" />
          </div>
        ))}
      </motion.div>

      {/* Section index */}
      <div className="flex items-center gap-4 mb-20 text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)]">
        <span className="text-[var(--color-accent)]">03</span>
        <span className="block w-12 h-px bg-[var(--color-line-strong)]" />
        Digital — The Code
      </div>

      {/* Header */}
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20">
        <div className="col-span-12 md:col-span-7">
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-[var(--color-ink)]">
            Bespoke <span className="italic text-[var(--color-accent)]">builds.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
          <p className="text-[var(--color-ink-muted)] text-sm leading-relaxed">
            Web architecture, e-commerce, and automated systems engineered
            without compromise.
          </p>
        </div>
      </div>

      {/* Project list */}
      <div className="border-t border-[var(--color-line-strong)]">
        {digitalPortfolio.map((p, i) => (
          <div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            data-cursor="hover"
            className="group relative border-b border-[var(--color-line-strong)] py-10 md:py-14 transition-colors duration-500 hover:bg-[var(--color-bg-raised)]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
              <div className="flex items-baseline gap-6 md:gap-10 flex-1 transition-transform duration-700 group-hover:translate-x-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-dim)] font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">
                    {p.category}
                  </p>
                  <h4 className="font-display text-3xl md:text-5xl text-[var(--color-ink)] leading-tight">
                    {p.title}
                  </h4>
                </div>
              </div>

              <div className="hidden md:block flex-1 max-w-md">
                <p className="text-[var(--color-ink-muted)] text-sm leading-relaxed font-light">
                  {p.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:flex-col md:items-end md:gap-3 md:max-w-[180px]">
                {p.techStack.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-ink-muted)] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
