"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // Easing curve for luxury feel
  const smoothEase = [0.16, 1, 0.3, 1] as const;

  // Variants for staggering the typography
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: smoothEase },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Media Wrapper */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30 mix-blend-luminosity"
        >
          {/* Replace with your partner's actual high-end reel */}
          <source src="/6.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay to ensure text pops */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/50"></div>
      </div>

      {/* Typographic Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left flex flex-col items-center md:items-start"
      >
        <div className="overflow-hidden mb-2">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase text-foreground"
          >
            Visuals that{" "}
            <span className="text-brand-blue font-light italic">Define</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase text-foreground"
          >
            Code that{" "}
            <span className="text-brand-blue font-light italic">Performs</span>.
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-12 max-w-2xl text-center md:text-left">
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl font-light tracking-wide"
          >
            A specialized creative studio engineering bespoke digital
            architectures and premium brand identities for the modern elite.
          </motion.p>
        </div>

        <motion.div variants={itemVariants}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-transparent border border-white/20 text-foreground uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-background transition-colors duration-500 ease-out"
          >
            Explore Our Services
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
