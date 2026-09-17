import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-alex-brush)", "cursive"],
      },
      colors: {
        primary: {
          DEFAULT: "#2C6E8A",
          dark: "#1E5470",
          soft: "#EAF2F5",
        },
        secondary: "#F7F3EE",
        accent: {
          DEFAULT: "#C8856A",
          dark: "#A8684F",
          soft: "#F4E3DA",
        },
        ink: "#1C2B35",
        muted: "#5C6B75",
        cream: "#F7F4EF",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(28,43,53,0.10)",
        card: "0 4px 24px rgba(28,43,53,0.07)",
      },
      maxWidth: {
        site: "1280px",
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
