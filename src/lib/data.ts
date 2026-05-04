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
  span?: "col-span-1" | "col-span-2" | "row-span-2";
};

export type DigitalProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  imageUrl: string; // Add this
};

export const visualPortfolio: VisualProject[] = [
  {
    id: "v1",
    title: "Midnight Symphony",
    category: "Music",
    // Replace with a real image path once you have it
    imageUrl:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/1.mp4",
    span: "row-span-2",
  },
  {
    id: "v2",
    title: "The Estate at Oakhaven",
    category: "Real Estate",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/2.mp4",
  },
  {
    id: "v3",
    title: "Vogue Submissions",
    category: "Editorial",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/3.mp4",
    span: "col-span-2",
  },
];

export const digitalPortfolio: DigitalProject[] = [
  {
    id: "d1",
    title: "Luxzy Bespoke",
    category: "Luxury E-Commerce & Digital Sizing",
    description:
      "A high-performance digital storefront featuring a custom sizing guide algorithm and a dark-mode editorial aesthetic tailored for luxury footwear.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/1.png",
  },
  {
    id: "d2",
    title: "Poly-Sniper Engine",
    category: "Algorithmic Trading & Automation",
    description:
      "A continuous market-monitoring bot designed to analyze data windows and execute automated sequences via high-speed API connections.",
    techStack: ["Python", "System Architecture", "API Integration"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "d3",
    title: "Event Ticketing Architecture",
    category: "Full-Stack Application",
    description:
      "A custom, highly scalable ticketing and access management system designed for seamless user flow during high-demand event launches.",
    techStack: ["React", "JavaScript", "Node.js"],
    imageUrl: "/3.png",
  },
];
