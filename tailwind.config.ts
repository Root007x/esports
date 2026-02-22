import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050508",
        surface: "#0D0D14",
        card: "#12121C",
        border: "#1E1E2E",
        primary: "#7C3AED",
        secondary: "#06B6D4",
        danger: "#EF4444",
        "text-primary": "#FFFFFF",
        "text-muted": "#64748B",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(124, 58, 237, 0.4)",
        glow: "0 0 25px rgba(124, 58, 237, 0.5)",
        "glow-lg": "0 0 40px rgba(124, 58, 237, 0.6)",
        "glow-cyan": "0 0 25px rgba(6, 182, 212, 0.5)",
        "glow-red": "0 0 20px rgba(239, 68, 68, 0.5)",
        "glow-green": "0 0 20px rgba(34, 197, 94, 0.5)",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" },
          "50%": { opacity: "0.9", boxShadow: "0 0 35px rgba(124, 58, 237, 0.7)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
