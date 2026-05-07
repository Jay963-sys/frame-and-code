"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, {
    damping: 28,
    stiffness: 380,
    mass: 0.4,
  });

  const sy = useSpring(y, {
    damping: 28,
    stiffness: 380,
    mass: 0.4,
  });

  // Enable only after hydration
  useEffect(() => {
    const hasFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    setEnabled(hasFinePointer);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const enter = (e: Event) => {
      const target = e.target as HTMLElement;

      if (
        target.closest(
          "a, button, [data-cursor='hover'], input, textarea, [role='button']",
        )
      ) {
        setHovering(true);
      }
    };

    const leave = (e: Event) => {
      const target = e.target as HTMLElement;

      if (
        target.closest(
          "a, button, [data-cursor='hover'], input, textarea, [role='button']",
        )
      ) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[150] rounded-full bg-[#f4ede1]"
        style={{
          x,
          y,
          width: 5,
          height: 5,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hovering ? 0 : 1,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[150] rounded-full border border-[#f4ede1]"
        style={{
          x: sx,
          y: sy,
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        transition={{
          width: { duration: 0.3 },
          height: { duration: 0.3 },
        }}
      />
    </>
  );
}
