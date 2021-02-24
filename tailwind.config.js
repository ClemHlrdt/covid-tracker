module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Quicksand", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      zIndex: {
        500: "500",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
