import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.75rem",
        mt: "4rem",
        md: "8.4375rem",
      },
    },
    screens: {
      sm: "320px",
      mm: "375px",
      mt: "768px",
      md: "1440px",
    },
    colors: {
      transparent: "rgba(0, 0, 0, 0)",
      white: "#fff",
      black: "#000",
      deYork: "#78C081",
      grayAsparagus: "#495E4C",
      amulet: "#7CA381",
      xanadu: "#7B897D",
      emerald: "#5CCD6A",
      blueRomance: "#D9FADD",
      gray: "#848484",
      silver: "#c4c4c4",
      wildSand: "#f5f5f5",
    },
    fontFamily: {
      "pascal-event": [
        "var(--proxima)",
        "var(--ruberoid)",
        "Arial, Helvetica, sans-serif",
      ],
      proxima: "var(--proxima)",
      ruberoid: "var(--ruberoid)",
    },
    boxShadow: {
      menu: "0px 4px 10px 0px rgba(73, 93, 76, 0.15)",
      servicesImg: "0px -4px 8px 0px rgba(15, 44, 15, 0.35)",
      cardPrice: "0px 0px 10px 0px rgba(73, 93, 76, 0.1)",
      cardPriceImg: "0px 2px 4px 0px rgba(46, 35, 25, 0.3)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "linear-gradient(180deg, #F2F2F2 0.09%, #F0F2F1 17.41%, #EFEFEF 35.53%, #EAECEC 51.42%, #E8EAEA 59.88%, #E7E8EA 66.94%, #E2E6E5 82.21%, #DEE2E1 99.91%), url('/image/backgroundHero.png')",
        prices: "url('/image/leaves.png')",
      },
      backgroundPosition: {
        prices: "-25px top",
      },
      backgroundSize: {
        prices: "",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    plugin(function ({ addComponents, theme }) {
      return addComponents({
        ".visually-hidden": {
          "@apply absolute m--px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0":
            {},
          clipPath: "inset(100%)",
          clip: "rect(0 0 0 0)",
        },
      });
    }),
  ],
};
export default config;
