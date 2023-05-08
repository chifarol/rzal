/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{jsZ,ts,jsx,tsx}",
    "./pages/**/*.{jsZ,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  prefix: "tw-",
  screens: {
    xs: "100px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1400px",
  },
  theme: {
    colors: {
      p1: "#ffffff",
      p2: "#744C9D",
      p3: "#F0DBFF",
      p4: "#2C0051",

      white: "#ffffff",
      s1: "#FCFBFD",
      s2: "#F8F6FA",
      s3: "#F4F1F7",
      s4: "#EEEAF3",
      s5: "#F1EDF5",
      s6: "#EAE4F0",
      s7: "#DCD2E7",

      n1: "#221C29",
      n2: "#39353D",
      n3: "#554F5C",
      n4: "#948E9A",
      n5: "#B6B0BC",
      n6: "#D8D2DE",
      n7: "#E9E3EF",
      "gradient-1": "linear-gradient(180deg, #6A4FF4 0%, #5638EE 100%)",
    },
    backgroundImage: {
      "gradient-1": "linear-gradient(180deg, #6A4FF4 0%, #5638EE 100%)",
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      purple1: "#6A4FF4",
      purple2: "#5638EE",
    }),
    fontFamily: {
      josefin: ["JosefinSans", "sans-serif"],
    },
    fontSize: {
      12: ["12px", "18px"],
      14: ["14px", "24px"],
      16: ["16px", "24px"],
      20: ["20px", "28px"],
      24: ["24px", "24px"],
      24: ["24px", "32px"],
      32: ["32px", "40px"],
      40: ["40px", "44px"],
      48: ["48px", "60px"],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
    },
    extend: {
      screens: {
        sm: { max: "576px" },
        md: { max: "780px" },
      },
    },
  },
  plugins: [],
};
