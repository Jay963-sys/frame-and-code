"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--color-bg-raised)] border-t border-[var(--color-line)] pt-32 pb-10 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Oversized brand mark */}
        <div className="border-b border-[var(--color-line-strong)] pb-16 mb-12">
          <h2 className="font-display text-[18vw] md:text-[12vw] leading-[0.85] tracking-[-0.03em] text-[var(--color-ink)]">
            Frame <span className="italic text-[var(--color-accent)]">&amp;</span> Code
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20">
          {/* Brand */}
          <div className="col-span-12 md:col-span-4">
            <p className="text-[var(--color-ink-muted)] text-sm max-w-xs leading-relaxed">
              A specialized creative studio engineering bespoke digital
              architectures and premium brand identities.
            </p>
          </div>

          {/* Studios */}
          <div className="col-span-6 md:col-span-2 md:col-start-7">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
              Studios
            </p>
            <ul className="space-y-2 text-[var(--color-ink-muted)] text-sm">
              <li>Lagos, NG</li>
              <li>Chicago, IL</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-6 md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
              Connect
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-ink-muted)]">
              <li>
                <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color-ink)] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@frameandcode.com"
                  className="hover:text-[var(--color-ink)] transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Index */}
          <div className="col-span-12 md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
              Index
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-ink-muted)]">
              <li>
                <Link href="#about" className="hover:text-[var(--color-ink)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#visuals" className="hover:text-[var(--color-ink)] transition-colors">
                  Visuals
                </Link>
              </li>
              <li>
                <Link href="#digital" className="hover:text-[var(--color-ink)] transition-colors">
                  Digital
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-[var(--color-ink)] transition-colors">
                  Process
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-line-strong)] text-[10px] text-[var(--color-ink-dim)] uppercase tracking-[0.3em] gap-6">
          <p>© {new Date().getFullYear()} Frame &amp; Code — All rights reserved</p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 hover:text-[var(--color-ink)] transition-colors"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-[var(--color-line-strong)] flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
