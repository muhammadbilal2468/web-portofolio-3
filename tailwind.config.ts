import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px", // Mulai dari sm (640px)
        md: "560px", // Medium screens (768px)
        lg: "1024px", // Large screens (1024px)
        xl: "1280px", // Extra large screens (1280px)
      },
      colors: {
        primary: "#0E101E", // Warna utama
        secondary: "#1F2443", // Warna kedua
        tertiary: "#FFCC66", // Warna kedua
        quaternary: "#e967ff", // Warna ketiga
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

export default config;
