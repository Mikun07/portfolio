/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },

      color: {
        "primary-800": "#213571",
        "gray-900": "#101828"
      },
    },
  },
  plugins: [],
};
