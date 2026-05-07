"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Index", href: "#index", number: "00" },
  { name: "About", href: "#about", number: "01" },
  { name: "Visuals", href: "#visuals", number: "02" },
  { name: "Digital", href: "#digital", number: "03" },
  { name: "Process", href: "#process", number: "04" },
  { name: "Contact", href: "#contact", number: "05" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.4 }}
        className={`fixed top-0 w-full z-[90] border-b transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0c0a]/85 backdrop-blur-md border-[var(--color-line)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link
            href="#index"
            className="font-display text-2xl tracking-tight text-[var(--color-ink)]"
          >
            Frame{" "}
            <span className="italic text-[var(--color-accent)]">&amp;</span>{" "}
            Code
          </Link>

          {/* Desktop links — minimal, just numbered indices */}
          <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)]">
            {navLinks.slice(1, 5).map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="group relative py-2 hover:text-[var(--color-ink)] transition-colors"
              >
                <span className="text-[var(--color-ink-dim)] mr-2">
                  {l.number}
                </span>
                {l.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 px-5 py-2.5 border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg)] transition-colors duration-500"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col items-end gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-[var(--color-ink)] transition-all duration-300 ${
                open ? "w-6 rotate-45 translate-y-[6px]" : "w-7"
              }`}
            />
            <span
              className={`block h-px bg-[var(--color-ink)] transition-all duration-300 ${
                open ? "w-6 -rotate-45 -translate-y-[3px]" : "w-5"
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] bg-[#0d0c0a] md:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navLinks.slice(1).map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 + i * 0.05,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 text-[var(--color-ink)] py-2"
                  >
                    <span className="text-[10px] tracking-[0.3em] text-[var(--color-ink-dim)]">
                      {l.number}
                    </span>
                    <span className="font-display text-5xl">{l.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-12 border-t border-[var(--color-line)] pt-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-ink-dim)]">
                Lagos · Chicago
              </p>
              <p className="mt-2 text-[var(--color-ink-muted)] text-sm">
                hello@frameandcode.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
