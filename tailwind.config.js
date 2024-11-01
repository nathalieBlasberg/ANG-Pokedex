/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      serif: ["Noto serif"],
    },
    extend: {
      colors: {
        hover: "#34a19c",
        white: "#e5eaee",
        "dark-blue": "#283c50",
        black: "#3e3b3a",
        gold: "#d8c43d",
        "dark-gold": "#8d7a38",
        grass: "#9bcc50",
        poison: "#b97fc9",
        fire: "#fd7d24",
        flying: {
          top: "#3dc7ef",
          bottom: "#bdb9b8",
        },
        water: "#4592c4",
        bug: "#729f3f",
        normal: "#a4acaf",
        electric: "#eed535",
        fairy: "#fdb9e9",
        ground: {
          top: "#f7de3f",
          bottom: "#ab9842",
        },
        fighting: "#d56723",
        psychic: "#f366b9",
        rock: "#a38c21",
        steel: "#9eb7b8",
        ice: "#51c4e7",
        ghost: "#7b62a3",
        dragon: {
          top: "#53a4cf",
          bottom: "#f16e57",
        },
        dark: "#707070",
      },
    },
  },
  plugins: [],
};
