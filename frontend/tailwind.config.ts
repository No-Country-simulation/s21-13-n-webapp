import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // fontFamily: {
      //   adlam: ['ADLaM Display', 'sans-serif'],
      // },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        heladeria: {
          "color-scheme": "light",
          "primary": "#e96d7b",
          "secondary": "#a991f7",
          "accent": "#66b1b3",
          "neutral": "#af4670",
          "neutral-content": "#f0d6e8",
          "base-100": "#fae7f4",
          "base-content": "#632c3b",
          "info": "#2563eb",
          "success": "#16a34a",
          "warning": "#d97706",
          "error": "oklch(73.07% 0.207 27.33)",
          // "--rounded-btn": "1.9rem",
          "--tab-radius": "0.7rem",


           //"primary-content": "#f1daff",
          // "secondary-content": "#160000", 
          // "accent-content": "#001603",
           "base-200": "#fbf0f4",//"#cfded2", // Cambia el color de background del contenido (verde pastel)
          // "base-300": "#b1beb3",
          // "info-content": "#000816",
          // "success-content": "#000900",
          // "warning-content": "#160600",
          // "error-content": "#140102",
        
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
} satisfies Config;