"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "The Frame",
    subtitle: "Visual Production",
    items: [
      "Commercial Photography",
      "Cinematography",
      "Editorial & Brand Shoots",
      "Creative Direction",
      "Event Coverage",
    ],
    accent: "text-brand-blue",
  },
  {
    title: "The Code",
    subtitle: "Digital Architecture",
    items: [
      "Bespoke Web Development",
      "Full-Stack Applications",
      "Headless E-Commerce",
      "UI/UX System Design",
      "Performance Optimization",
    ],
    accent: "text-brand-orange",
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
    accent: "text-white",
  },
];

export default function Capabilities() {
  return (
    <section id="agency" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 uppercase tracking-[0.3em] mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light tracking-tight text-foreground"
          >
            An integrated approach to{" "}
            <span className="font-bold">modern luxury.</span>
          </motion.h3>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-t border-white/10 pt-8"
            >
              <h4
                className={`text-xs uppercase tracking-[0.2em] mb-2 font-medium ${service.accent}`}
              >
                {service.title}
              </h4>
              <h5 className="text-2xl text-foreground font-light tracking-tight mb-8">
                {service.subtitle}
              </h5>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-400 text-sm tracking-wide flex items-start gap-3"
                  >
                    <span className="text-white/20 mt-1 block">―</span>
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
