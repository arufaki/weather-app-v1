/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        popins: "Poppins, Arial, sans-serif",
      },
      backgroundImage: {
        "hero-image": "url('../assets/img/dummy-img.png')",
        "search-icon": "url('../assets/svg/search.svg')",
      },
      boxShadow: {
        "4xl": "0px 0px 81px -13px rgba(0,0,0,0.69)",
      },
    },

    screens: {
      vs: "540px",
    },
  },
  plugins: [],
};
