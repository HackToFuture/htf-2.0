/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "#0e1111",
        text_col_1: "#909090",
      },
    },
  },
  plugins: [],
};
