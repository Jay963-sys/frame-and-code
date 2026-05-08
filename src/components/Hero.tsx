"use client";

import { motion } from "framer-motion";
import AnimatedLine from "./AnimatedLine";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  // Short delays — hero now animates on mount. On first visit the loader covers
  // these animations (which finish ~1.4s in), so by the time the loader fades
  // the hero is fully revealed. On refreshes the loader is skipped and the
  // user sees a fast, clean reveal instead of a blank screen for 3 seconds.
  return (
    <section
      id="index"
      className="relative min-h-screen w-full flex items-end overflow-hidden pt-32 pb-28 md:pb-16"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-25 mix-blend-luminosity"
        >
          <source src="/6.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-transparent to-[#0d0c0a]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0a]/80 to-transparent" />
      </div>

      {/* Top-left meta strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-28 left-6 md:left-10 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)]"
      >
        <span className="block w-8 h-px bg-[var(--color-accent)]" />
        Studio · Est. 2025
      </motion.div>

      {/* Top-right scrolling indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.4 }}
        className="absolute top-32 right-6 md:right-10 z-10 hidden md:flex flex-col items-end gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)]"
      >
        <span>Reel — N° 01</span>
        <span className="text-[var(--color-ink-dim)]">Lagos / Chicago</span>
      </motion.div>

      {/* Main typographic block */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <h1 className="font-display text-[15vw] md:text-[7vw] leading-[0.92] tracking-[-0.02em] text-[var(--color-ink)]">
          <AnimatedLine immediate delay={0.1}>
            Visuals that
          </AnimatedLine>
          <br />
          <AnimatedLine
            immediate
            delay={0.25}
            className="italic text-[var(--color-accent)]"
          >
            define.
          </AnimatedLine>
          <br />
          <AnimatedLine immediate delay={0.4}>
            Code that
          </AnimatedLine>
          <br />
          <AnimatedLine
            immediate
            delay={0.55}
            className="italic text-[var(--color-accent)]"
          >
            performs.
          </AnimatedLine>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <p className="max-w-md text-[var(--color-ink-muted)] text-base md:text-lg leading-relaxed font-light">
            A two-discipline studio. Premium photography and cinematography
            paired with bespoke web engineering — built for clients who can tell
            the difference.
          </p>

          <MagneticButton
            href="#contact"
            className="px-10 py-4 border border-[var(--color-line-strong)] text-[var(--color-ink)] uppercase tracking-[0.25em] text-xs hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-colors duration-500"
          >
            Begin a Commission →
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] uppercase tracking-[0.4em] text-[var(--color-ink-muted)] hidden sm:flex flex-col items-center gap-2"
      >
        <span>Scroll</span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8 bg-[var(--color-ink-muted)]"
        />
      </motion.div>
    </section>
  );
}
