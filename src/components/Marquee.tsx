"use client";

const items = [
  "Photography",
  "Full-Stack Engineering",
  "Cinematography",
  "Web Architecture",
  "Editorial Direction",
  "E-Commerce",
  "Brand Identity",
  "Creative Strategy",
  "Full-Stack Engineering",
];

export default function Marquee() {
  return (
    <section
      aria-hidden
      className="relative py-12 border-y border-[var(--color-line)] bg-[var(--color-bg-raised)] overflow-hidden"
    >
      <div className="flex marquee-track whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-5xl md:text-7xl text-[var(--color-ink)] mx-12 flex items-center gap-12"
          >
            {item}
            <span className="text-[var(--color-accent)] italic">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
