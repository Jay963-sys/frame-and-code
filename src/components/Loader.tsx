"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const alreadyLoaded = sessionStorage.getItem("fc-loaded") === "1";

    if (alreadyLoaded) {
      setDone(true);
      return;
    }

    const t = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("fc-loaded", "1");
    }, 2200);

    return () => clearTimeout(t);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0d0c0a]"
        >
          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute -bottom-3 left-0 h-px bg-[#c89b5a]"
            />

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-3xl md:text-5xl tracking-tight text-[#f4ede1]"
            >
              Frame <span className="italic text-[#c89b5a]">&amp;</span> Code
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 text-[10px] tracking-[0.4em] uppercase text-[#a39d8e] text-center"
            >
              Lagos · Chicago
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
