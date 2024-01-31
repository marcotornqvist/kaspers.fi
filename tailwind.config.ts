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
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-bg": "linear-gradient(180deg, #E49C1C, #FCF5E8)",
      },
    },
  },
  plugins: [],
};
export default config;
