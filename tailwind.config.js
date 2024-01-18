/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "#0e1111",
        bg_color_2: "#060707",
        text_col_1: "#cccccc",
        orange1: "#fca311",
        yellow1: "#ffd409",
      },
      fontFamily: {
        interreg: ["interreg", "sans-serif"],
        intermed: ["intermed", "sans-serif"],
        intersemi: ["intersemi", "sans-serif"],
        interbold: ["interbold", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "gradient-right": "linear-gradient(to right, #fca311, #ffd409)",
      }),
      backdropBlur: {
        blur1: "2px",
      },
    },
  },
  plugins: [],
};
