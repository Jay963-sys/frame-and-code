export type VisualProject = {
  id: string;
  title: string;
  category:
    | "Commercial"
    | "Event"
    | "Real Estate"
    | "Editorial"
    | "Music"
    | "Fashion";
  imageUrl: string;
  videoUrl?: string;
  span?: string; // tailwind grid span classes
};

export type DigitalProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  imageUrl: string;
};

/**
 * Visual portfolio — uses placeholder Unsplash imagery and the existing
 * mp4 reels in /public. Replace with real client work before launch.
 *
 * The asymmetric grid spans below produce a 12-col editorial layout:
 *   v1: large left tile  (col-span-7, row-span-2)
 *   v2: top-right tile   (col-span-5)
 *   v3: bottom-right     (col-span-5)
 *   v4: full-width strip (col-span-12)
 */
export const visualPortfolio: VisualProject[] = [
  {
    id: "v1",
    title: "Midnight Symphony",
    category: "Music",
    imageUrl:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1400&auto=format&fit=crop",
    videoUrl: "/1.mp4",
    span: "col-span-12 md:col-span-7 row-span-2 aspect-[4/5] md:aspect-auto md:min-h-[820px]",
  },
  {
    id: "v2",
    title: "The Estate at Oakhaven",
    category: "Real Estate",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
    videoUrl: "/2.mp4",
    span: "col-span-12 md:col-span-5 aspect-[4/5] md:aspect-[5/4]",
  },
  {
    id: "v3",
    title: "Vogue Submissions",
    category: "Editorial",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop",
    videoUrl: "/3.mp4",
    span: "col-span-12 md:col-span-5 aspect-[4/5] md:aspect-[5/4]",
  },
  {
    id: "v4",
    title: "Atelier — Spring Capsule",
    category: "Fashion",
    imageUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "/4.mp4",
    span: "col-span-12 aspect-[16/9] md:aspect-[21/9]",
  },
];

export const digitalPortfolio: DigitalProject[] = [
  {
    id: "d1",
    title: "Luxzy Bespoke",
    category: "Luxury E-Commerce",
    description:
      "A high-performance digital storefront featuring a custom sizing-guide algorithm and a dark-mode editorial aesthetic tailored for luxury footwear.",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: "/1.png",
  },
  {
    id: "d2",
    title: "Poly-Sniper Engine",
    category: "Algorithmic Automation",
    description:
      "A continuous market-monitoring service designed to analyse data windows and execute automated sequences over high-speed API connections.",
    techStack: ["Python", "Architecture", "API"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "d3",
    title: "Event Ticketing Architecture",
    category: "Full-Stack Application",
    description:
      "A custom, highly scalable ticketing and access-management system designed for seamless flow during high-demand event launches.",
    techStack: ["React", "Node", "Postgres"],
    imageUrl: "/3.png",
  },
];
