export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blue: "#3C21B5",
        white: "#F5F5F6",
        grey: "#A0A2AE",
        lightBlue: "#221E56",
        dark: "#333241",
        darkLight: "#242426",
        bgPrimary: "#040C12",
      },
      backgroundImage: {
        gradientPrimary:
          "linear-gradient(90deg, #7C15F4 0%, #672DEC 40.1%, #3967E0 70%, #2F8AE2 100%)",
        gradientSecondary:
          "linear-gradient(90deg, #7C15F4 0%, #672DEC 40.1%, #3967E0 70%, #2F8AE2 100%)",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        agdasima: ["Agdasima", "serif"],
      },
      fontWeight: {
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
