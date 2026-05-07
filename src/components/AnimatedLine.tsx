"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /**
   * If true, the line animates on mount (use for content that's always in view,
   * like the hero). If false, it waits until it scrolls into view.
   */
  immediate?: boolean;
};

export default function AnimatedLine({
  children,
  className = "",
  delay = 0,
  immediate = false,
}: Props) {
  const transition = { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const, delay };
  const initial = { y: "110%" };
  const target = { y: "0%" };

  return (
    <span className="line-mask">
      {immediate ? (
        <motion.span
          initial={initial}
          animate={target}
          transition={transition}
          className={`block ${className}`}
        >
          {children}
        </motion.span>
      ) : (
        <motion.span
          initial={initial}
          whileInView={target}
          viewport={{ once: true }}
          transition={transition}
          className={`block ${className}`}
        >
          {children}
        </motion.span>
      )}
    </span>
  );
}
