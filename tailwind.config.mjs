/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1284px",
      "2xl": "1536px",
      "3xl": "1654px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "6.25vw",
        xl: "6.25vw",
        "2xl": "6.25vw",
        "3xl": "4.25vw",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        robo: ["Roboto", "serif"],
        roboTitle: ["Roboto Slab", "serif"],
      },
    },
  },

  plugins: [],
};
