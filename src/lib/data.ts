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
  span?: string;
};

export type DigitalProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  /** URL to the live deployed site. If omitted, the row stays informational (no link). */
  liveUrl?: string;
};

export const visualPortfolio: VisualProject[] = [
  {
    id: "v1",
    title: "Midnight Symphony",
    category: "Music",
    imageUrl:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1400&auto=format&fit=crop",
    videoUrl: "/rema.mp4",
    span: "col-span-12 md:col-span-7 row-span-2 aspect-[4/5] md:aspect-auto md:min-h-[820px]",
  },
  {
    id: "v2",
    title: "The Estate at Oakhaven",
    category: "Real Estate",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
    videoUrl: "/estate.mp4",
    span: "col-span-12 md:col-span-5 aspect-[4/5] md:aspect-[5/4]",
  },
  {
    id: "v3",
    title: "Vogue Submissions",
    category: "Editorial",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop",
    videoUrl: "/vogue.mp4",
    span: "col-span-12 md:col-span-5 aspect-[4/5] md:aspect-[5/4]",
  },
];

export const digitalPortfolio: DigitalProject[] = [
  {
    id: "d1",
    title: "Toye Studios",
    category: "Full-Stack Application",
    description:
      "A high-performance digital gallery for showcasing creative work.",
    techStack: ["React", "Node", "Postgres"],
    imageUrl: "/toye.png",
    liveUrl: "https://Toyestudios.co.uk",
  },
  {
    id: "d2",
    title: "Poly-Sniper Engine",
    category: "Algorithmic Automation",
    description:
      "A continuous market-monitoring service designed to analyse data windows and execute automated sequences over high-speed API connections.",
    techStack: ["JavaScript", "Architecture", "API"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://github.com/Jay963-sys/poly-sniper-bot",
  },
  {
    id: "d3",
    title: "Luxzy Bespoke",
    category: "Full-Stack Application",
    description:
      "A high-performance digital storefront featuring a custom sizing-guide algorithm and a dark-mode editorial aesthetic tailored for luxury footwear.",
    techStack: ["React", "Node", "Postgres"],
    imageUrl: "/luxzy.png",
    liveUrl: "https://luxzybespoke.com",
  },
  {
    id: "d4",
    title: "NOC Fault Logger",
    category: "Full-Stack Application",
    description:
      "A real-time logging solution for monitoring and tracking faults in network operations.",
    techStack: ["JavaScript", "Architecture", "API"],
    imageUrl: "/noc.png",
    liveUrl: "https://github.com/Jay963-sys/NOC-INCIDENT-TRACKER", // ← Replace with the real URL
  },
  {
    id: "d5",
    title: "Bhoye Visuals",
    category: "Full-Stack Application",
    description:
      "A high-performance digital gallery for showcasing creative work.",
    techStack: ["React", "Node", "Postgres"],
    imageUrl: "/bhoye.png",
    liveUrl: "https://bhoyevisuals.com",
  },
];
