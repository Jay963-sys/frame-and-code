"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const serviceOptions = [
  {
    id: "visuals",
    label: "Visual Production",
    description: "Photography & Cinematography",
    color: "hover:text-brand-blue hover:border-brand-blue",
  },
  {
    id: "digital",
    label: "Digital Architecture",
    description: "Web Dev & E-Commerce",
    color: "hover:text-brand-orange hover:border-brand-orange",
  },
  {
    id: "synergy",
    label: "Complete Identity",
    description: "Full Agency Partnership",
    color: "hover:text-white hover:border-white",
  },
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section
      id="contact"
      className="py-32 px-6 max-w-4xl mx-auto min-h-screen flex flex-col justify-center"
    >
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-sm text-gray-400 uppercase tracking-[0.3em] mb-4">
          Start a Project
        </h2>
        <h3 className="text-4xl md:text-6xl font-light tracking-tight text-foreground">
          Let's build something{" "}
          <span className="font-bold italic text-brand-blue">exceptional.</span>
        </h3>
      </div>

      <div className="w-full bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
        {/* Step 1: Select Service */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
            01. What are you looking for?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {serviceOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedService(option.id)}
                className={`text-left p-6 border transition-all duration-300 ${
                  selectedService === option.id
                    ? "border-white bg-white/5"
                    : "border-white/10 bg-transparent opacity-60 hover:opacity-100"
                } ${option.color}`}
              >
                <h4 className="text-lg font-medium text-foreground mb-2">
                  {option.label}
                </h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  {option.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: The Form Details (Revealed smoothly) */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/10 pt-10">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">
                  02. Project Details
                </p>

                <form
                  className="space-y-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Minimalist Input Fields */}
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        placeholder=" "
                        className="block w-full bg-transparent border-0 border-b border-white/20 py-3 text-foreground focus:ring-0 focus:border-brand-blue transition-colors peer"
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute top-3 left-0 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-blue uppercase tracking-widest pointer-events-none"
                      >
                        Your Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        placeholder=" "
                        className="block w-full bg-transparent border-0 border-b border-white/20 py-3 text-foreground focus:ring-0 focus:border-brand-blue transition-colors peer"
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute top-3 left-0 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-blue uppercase tracking-widest pointer-events-none"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      placeholder=" "
                      className="block w-full bg-transparent border-0 border-b border-white/20 py-3 text-foreground focus:ring-0 focus:border-brand-blue transition-colors peer resize-none"
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute top-3 left-0 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-blue uppercase tracking-widest pointer-events-none"
                    >
                      Tell us about your vision
                    </label>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      type="submit"
                      className="group flex items-center gap-4 bg-white text-background px-8 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-brand-blue hover:text-white transition-all duration-500"
                    >
                      Submit Inquiry
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
