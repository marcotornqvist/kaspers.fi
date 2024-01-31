import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "eb-garamond": ["var(--font-eb-garamond)"],
      // "fjord-one": ["var(--font-fjord-one)"],
    },
    colors: {
      "dark-yellow": "#E49C1C",
      beige: "#FCF5E8",
    },
  },
  plugins: [],
};
export default config;
