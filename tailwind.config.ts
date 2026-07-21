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
        surface: "#181C23",
        panel: "#232733",
        accent: "#FDD856",
        "accent-deep": "#F6D150",
        ink: "#67561A",
      },
      fontFamily: {
        roadradio: ['"Road Radio"', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      maxWidth: {
        site: "1400px",
      },
      borderRadius: {
        hero: "32px",
        card: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
