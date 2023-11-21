/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        frame_color: "#FEFEFE",
        primary_blue: "#011458",
      },
    },
  },
  plugins: [],
};
