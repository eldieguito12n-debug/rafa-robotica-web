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
        background: "#020817", // Muy oscuro, casi negro azulado
        foreground: "#f8fafc", // slate-50
        primary: "#00f2fe", // Cian neón tecnológico
        secondary: "#3b82f6", // Azul brillante
        surface: "#0f172a", // slate-900
        "surface-light": "#1e293b", // slate-800
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
