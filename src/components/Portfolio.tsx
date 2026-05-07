"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { visualPortfolio } from "@/lib/data";

export default function Portfolio() {
  return (
    <section
      id="visuals"
      className="relative py-32 md:py-48 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
      {/* Section index */}
      <div className="flex items-center gap-4 mb-20 text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)]">
        <span className="text-[var(--color-accent)]">02</span>
        <span className="block w-12 h-px bg-[var(--color-line-strong)]" />
        Visuals — The Frame
      </div>

      {/* Header */}
      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20">
        <div className="col-span-12 md:col-span-7">
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-[var(--color-ink)]">
            Selected{" "}
            <span className="italic text-[var(--color-accent)]">work.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
          <p className="text-[var(--color-ink-muted)] text-sm leading-relaxed">
            Editorial, commercial, and brand photography for clients who treat
            image as identity.
          </p>
        </div>
      </div>

      {/* Asymmetric editorial grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {visualPortfolio.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            data-cursor="hover"
            className={`relative group overflow-hidden bg-[var(--color-bg-raised)] ${project.span}`}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
            />

            {project.videoUrl && (
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-10"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-70 z-20" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-2">
                  {project.category}
                </p>
                <h4 className="font-display text-2xl md:text-3xl text-[var(--color-ink)] leading-tight">
                  {project.title}
                </h4>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)] hidden md:block">
                {String(index + 1).padStart(2, "0")} / {String(visualPortfolio.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
