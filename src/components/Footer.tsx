"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Brand & Locations */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          {/* Brand Identity */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-widest uppercase block mb-4"
            >
              Frame<span className="text-brand-blue font-light">&</span>Code
            </Link>
            <p className="text-gray-500 text-sm max-w-xs">
              A specialized creative studio engineering bespoke digital
              architectures and premium brand identities.
            </p>
          </div>

          {/* Global Presence */}
          <div className="flex gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-orange mb-4 font-medium">
                Studio
              </p>
              <ul className="space-y-2 text-gray-400 text-sm"></ul>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-blue mb-4 font-medium">
                Connect
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@frameandcode.com"
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Frame & Code. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 hover:text-foreground transition-colors duration-300 mt-6 md:mt-0"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:-translate-y-1 transition-all duration-300">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
