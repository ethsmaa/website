import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        //#0e1331 to #090914
        primary: {
          100: "#0e1331",
          200: "#0f152e",
          300: "#10172b",
          400: "#111928",
          500: "#121b25",
          600: "#131d22",
          700: "#141f1f",
          800: "#15211c",
          900: "#162319",
        },
        secondary: {
          100: "#090914",
          200: "#0a0b11",
          300: "#0b0d0e",
          400: "#0c0e0b",
          500: "#0d1008",
          600: "#0e1105",
          700: "#0f1202",
          800: "#101300",
          900: "#111400",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
