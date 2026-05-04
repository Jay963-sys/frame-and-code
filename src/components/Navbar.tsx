"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Visuals", href: "#visuals" },
  { name: "Digital", href: "#digital" },
  { name: "Agency", href: "#agency" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-widest uppercase"
        >
          Frame<span className="text-brand-blue font-light">&</span>Code
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-gray-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-foreground transition-colors relative group py-2"
            >
              {link.name}
              {/* Subtle Dark Orange animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-orange transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
          ))}

          {/* Primary Call to Action */}
          <Link
            href="#contact"
            className="px-8 py-3 bg-brand-blue text-foreground hover:bg-brand-blue/90 transition-all duration-300 shadow-[0_0_20px_rgba(16,72,221,0.2)] hover:shadow-[0_0_30px_rgba(16,72,221,0.4)]"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
