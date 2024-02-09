/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cblack: "#50413c",
        corange: "#f5834d",
        cyellow: "#ffcc63",
        cwhite: "#f8f5ec",
      },
    },
  },
  plugins: [],
};
