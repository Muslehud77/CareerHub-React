/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "black",
          secondary: "black",
          accent: "black",
          neutral: "black",
          "base-100": "black",
        },
      },
      "light",
      "cupcake",
    ],
  },
};
