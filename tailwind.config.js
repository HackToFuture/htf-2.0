/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "#0e1111",
        bg_color_2: "#060707",
        text_col_1: "#cccccc",
        text_col_2: "#008ed8",
        orange1: "#fca311",
        yellow1: "#ffd409",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "gradient-right": "linear-gradient(to right, #008ed8, #4bbdfa)",
      }),
      backdropBlur: {
        blur1: "2px",
      },
    },
  },
  plugins: [],
};
