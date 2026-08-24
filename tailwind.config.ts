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
        background: "#0f172a", // slate-900
        foreground: "#f8fafc", // slate-50
        primary: "#10b981", // emerald-500
        secondary: "#3b82f6", // blue-500
        surface: "#1e293b", // slate-800
        "surface-light": "#334155", // slate-700
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.33%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
