"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { digitalPortfolio, DigitalProject } from "@/lib/data";

export default function DigitalPortfolio() {
  return (
    <section
      id="digital"
      className="relative py-32 md:py-48 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
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
            Bespoke{" "}
            <span className="italic text-[var(--color-accent)]">builds.</span>
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
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: DigitalProject;
  index: number;
}) {
  const RowBody = (
    <div className="grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 transition-colors duration-500 group-hover:bg-[var(--color-bg-raised)]">
      {/* Number — hidden on mobile, visible on desktop */}
      <div className="hidden md:flex md:col-span-1 pt-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-dim)] font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Thumbnail */}
      <div className="col-span-12 md:col-span-4 lg:col-span-4">
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-raised)]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-[var(--color-bg)]/0 group-hover:bg-[var(--color-bg)]/10 transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className="col-span-12 md:col-span-7 lg:col-span-7 flex flex-col justify-between gap-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">
            {project.category}
          </p>
          <h3 className="font-display text-3xl md:text-5xl text-[var(--color-ink)] leading-[1.05] mb-5 transition-transform duration-500 group-hover:translate-x-2">
            {project.title}
          </h3>
          <p className="text-[var(--color-ink-muted)] text-sm md:text-base leading-relaxed font-light max-w-2xl">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
          {/* Tech stack */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-ink-muted)] font-mono"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA — only renders if there's a real live URL */}
          {project.liveUrl && (
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink) ] group-hover:text-[var(--color-accent)] transition-colors duration-300">
              View Live Site
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="border-b border-[var(--color-line-strong)]"
    >
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="group block"
        >
          {RowBody}
        </a>
      ) : (
        <div className="group" data-cursor="hover">
          {RowBody}
        </div>
      )}
    </motion.div>
  );
}
