import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212", // Dark
        foreground: "#FFFFFF", // White
        brand: {
          blue: "#1048DD", // Tech Blue
          orange: "#FF8C00", // Dark Orange
        },
      },
    },
  },
  plugins: [],
};
export default config;
