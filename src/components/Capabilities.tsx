"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "The Frame",
    subtitle: "Visual Production",
    items: [
      "Commercial Videography",
      "Cinematography",
      "Editorial & Brand Shoots",
      "Creative Direction",
      "Event Coverage",
    ],
  },
  {
    title: "The Code",
    subtitle: "Digital Architecture",
    items: [
      "Bespoke Web Development",
      "Full-Stack Applications",
      "Headless E-Commerce",
      "UI / UX System Design",
      "Performance Engineering",
    ],
  },
  {
    title: "The Synergy",
    subtitle: "Complete Identity",
    items: [
      "Digital Makeovers",
      "Premium Product Launches",
      "Brand Strategy",
      "Market Positioning",
      "Technical Consultation",
    ],
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative py-32 md:py-48 px-6 md:px-10 bg-[var(--color-bg-raised)]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-20 text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)]">
          <span className="text-[var(--color-accent)]">—</span>
          <span className="block w-12 h-px bg-[var(--color-line-strong)]" />
          Capabilities
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-24">
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-[var(--color-ink)]">
              An integrated approach to{" "}
              <span className="italic text-[var(--color-accent)]">
                modern luxury.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-t border-[var(--color-line-strong)] pt-8"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">
                {service.title}
              </p>
              <h3 className="font-display text-3xl text-[var(--color-ink)] mb-10">
                {service.subtitle}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-[var(--color-ink-muted)] text-sm tracking-wide flex items-start gap-3"
                  >
                    <span className="text-[var(--color-ink-dim)] mt-1 block">
                      ―
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
