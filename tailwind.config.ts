import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'silver': '#CCCCCC',
        'white-smoke': '#F2F2F2',
        'dark-gray': '#7E7E7E',
        'purple': '#7A306C',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
