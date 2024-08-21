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
        primary: "#140D9D",
        "primary-accent": "#004ed3",
        secondary: "#D25917",
        "secondary-accent": "#ffb643",
        neutral: "#7b7485",
        "neutral-accent": "#afa8ba",
        light: "#F2F2F2",
        dark: "#131313",
        background: "#FBFBFB",
        "black-70": "rgba(0, 0, 0, 0.7)",
        transparent: "rgba(0, 0, 0, 0)",
      },
      screens: {
        xs: {
          max: "120px",
        },
        sm: {
          max: "480px",
        },
        md: {
          max: "768px",
        },
        lg: {
          max: "976px",
        },
        xl: {
          max: "1440px",
        },
      },
      boxShadow: {
        custom: "0 0 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
