/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Secular One", sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
