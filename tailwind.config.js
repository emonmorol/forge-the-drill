module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/Assets/Images/banner.png')",
        footer: "url('/src/Assets/Images/footer.png')",
        login: "url('/src/Assets/Images/login-2.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#125d80",
          secondary: "#f6d860",
          accent: "#125e814a",
          neutral: "#f6fcff",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
