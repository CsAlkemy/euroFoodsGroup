module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        email: `url('../assets/images/emaill.jpg')`,
        phone: `url('../assets/images/phone.jpg')`,
        location: `url('../assets/images/map.jpg')`,
        bigCar: `url('../assets/images/foodbike.png')`,
        littleDot: `url('../assets/images/contact.png')`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
