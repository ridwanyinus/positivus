import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        small: "470px",
        medium: "730px",
        desktop: "1365px",
        largesceen: "1700px",
        fourk: "2400px",
      },
      colors: {
        dark: "#191A23",
        light: "#F3F3F3",
        green: "#B9FF66",
      },
    },
  },
  plugins: [],
};
export default config;
