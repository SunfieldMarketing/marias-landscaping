import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  "#f4f6f6",
          100: "#e4e9ea",
          200: "#c8d2d5",
          300: "#a1b0b6",
          400: "#748790",
          500: "#556974",
          600: "#44545e",
          700: "#39464e",
          800: "#293338",
          900: "#1a2124",
          950: "#0c1012",
        },
        gold: {
          50:  "#fdf7ec",
          100: "#faebc9",
          200: "#f4d38e",
          300: "#edb955",
          400: "#e6a12e",
          500: "#d6871c",
          600: "#b56815",
          700: "#8f4e17",
          800: "#743f18",
          900: "#603517",
        },
        sage: {
          50:  "#f2f6f1",
          100: "#e1eadd",
          200: "#c3d5bc",
          300: "#9dbb90",
          400: "#7aa367",
          500: "#5c8747",
          600: "#476b37",
          700: "#3a552e",
          800: "#304528",
          900: "#293a22",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
      },
      animation: {
        "fade-up":      "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "gradient-x":   "gradientX 14s ease infinite",
        "marquee":      "marquee 36s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        "pulse-ring":   "pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "float-slow":   "floatSlow 6s ease-in-out infinite",
        "float-med":    "floatMed 4s ease-in-out infinite",
        "shimmer-text": "shimmerText 4s linear infinite",
        "shimmer-slide":"shimmerSlide 2.6s ease-in-out infinite",
        "bounce-in":    "bounceIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "slide-in-left":"slideInLeft 0.65s cubic-bezier(0.22,1,0.36,1) forwards",
        "slide-in-right":"slideInRight 0.65s cubic-bezier(0.22,1,0.36,1) forwards",
        "spin-slow":    "spin 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%":   { boxShadow: "0 0 0 0 rgba(214,135,28,0.55)" },
          "70%":  { boxShadow: "0 0 0 14px rgba(214,135,28,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(214,135,28,0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%":      { transform: "translateY(-14px) rotate(3deg)" },
        },
        floatMed: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%":      { transform: "translateY(-10px) rotate(-2deg)" },
        },
        shimmerText: {
          "0%":   { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        shimmerSlide: {
          "0%":   { left: "-100%" },
          "60%":  { left: "130%" },
          "100%": { left: "130%" },
        },
        bounceIn: {
          "0%":   { opacity: "0", transform: "scale(0.7)" },
          "70%":  { transform: "scale(1.06)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%":   { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%":   { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundSize: {
        "300%": "300% 300%",
        "200%": "200% auto",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "gold-glow":    "0 0 28px 4px rgba(214,135,28,0.35)",
        "gold-glow-sm": "0 0 16px 2px rgba(214,135,28,0.25)",
        "sage-glow":    "0 0 28px 4px rgba(92,135,71,0.35)",
        "ink-glow":     "0 0 28px 4px rgba(68,84,94,0.35)",
        "elevation-1":  "0 2px 12px -2px rgba(0,0,0,0.08)",
        "elevation-2":  "0 8px 32px -4px rgba(0,0,0,0.12)",
        "elevation-3":  "0 20px 60px -12px rgba(0,0,0,0.18)",
        "card-hover":   "0 20px 60px -12px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
