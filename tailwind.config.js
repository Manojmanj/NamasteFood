/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        98: "0.98",
      },
      colors: {
        customGreen: "#00AD1D", // Define your custom color
      },
    },
  },
  plugins: [],
};
