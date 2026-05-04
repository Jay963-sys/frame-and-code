"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { digitalPortfolio } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function DigitalPortfolio() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration for the floating image
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the image width/height so the cursor is in the center
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="digital"
      className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 mt-20 relative"
    >
      {/* Floating Image Reveal */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] z-50 overflow-hidden rounded-sm hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: hoveredProject ? 1 : 0,
          scale: hoveredProject ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
      >
        {digitalPortfolio.map((project) => (
          <div
            key={`img-${project.id}`}
            className={`absolute inset-0 transition-opacity duration-300 ${
              hoveredProject === project.id ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Section Header */}
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between pb-8">
        <div>
          <h2 className="text-sm text-brand-orange uppercase tracking-[0.3em] mb-4">
            The Code
          </h2>
          <h3 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Digital <span className="font-bold">Architecture.</span>
          </h3>
        </div>
        <p className="text-gray-400 max-w-sm mt-6 md:mt-0 text-sm md:text-right">
          Bespoke web applications, high-performance e-commerce, and automated
          system engineering.
        </p>
      </div>

      {/* Interactive Project List */}
      <div className="flex flex-col w-full border-t border-white/10">
        {digitalPortfolio.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 pl-4 pr-4">
              <div className="flex-1 transition-transform duration-500 group-hover:translate-x-4">
                <p className="text-brand-blue text-xs uppercase tracking-widest mb-2 font-medium">
                  {project.category}
                </p>
                <h4 className="text-3xl md:text-4xl text-foreground font-light tracking-tight flex items-center gap-4">
                  {project.title}
                </h4>
              </div>

              <div className="flex-1 max-w-lg hidden md:block">
                <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-300">
                  {project.description}
                </p>
              </div>

              <div className="flex-1 md:text-right flex flex-col md:items-end justify-between transition-transform duration-500 group-hover:-translate-x-4">
                <div className="flex flex-wrap gap-2 md:justify-end mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[10px] uppercase tracking-widest text-foreground bg-white/5 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm text-foreground group-hover:text-brand-orange transition-colors duration-300">
                  <span className="uppercase tracking-widest text-xs">
                    View Build
                  </span>
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
