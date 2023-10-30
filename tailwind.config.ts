import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      mt: "768px",
      md: "1440px",
    },
    colors: {},
    fontFamily: {},
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    plugin(function ({ addComponents, addVariant, addUtilities }) {
      addComponents({
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
