"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { visualPortfolio } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="visuals" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
        <div>
          <h2 className="text-sm text-brand-blue uppercase tracking-[0.3em] mb-4">
            The Frame
          </h2>
          <h3 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Visual <span className="font-bold">Production.</span>
          </h3>
        </div>
        <p className="text-gray-400 max-w-sm mt-6 md:mt-0 text-sm">
          High-fidelity photography and cinematography tailored for premium
          brand identities.
        </p>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {visualPortfolio.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative group overflow-hidden bg-[#1a1a1a] rounded-sm ${project.span || ""}`}
          >
            {/* Base Image */}
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Video Overlay (Fades in on hover) */}
            {project.videoUrl && (
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-10"
              />
            )}

            {/* Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-500 z-20" />

            {/* Typographic Overlay */}
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out z-30">
              <p className="text-brand-orange text-xs uppercase tracking-[0.2em] mb-3 font-semibold drop-shadow-md">
                {project.category}
              </p>
              <h4 className="text-2xl text-foreground font-light tracking-tight drop-shadow-lg">
                {project.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
