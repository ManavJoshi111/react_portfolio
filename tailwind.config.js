/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        heading: "var(--heading)",
        paragraph: "var(--paragraph)",
        border: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
