import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': {'max': '425px'},
        'xxs': {'max': '325px'},
      }
    },
  },
  plugins: [],
};
export default config;
