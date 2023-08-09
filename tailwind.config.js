/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "var(--light-gradient), var(--hero-image)",
        "s01-image": "var(--light-gradient), var(--services-image-01)",
        "s02-image": "var(--light-gradient), var(--services-image-02)",
        "s03-image": "var(--light-gradient), var(--services-image-03)",
        "s04-image": "var(--light-gradient), var(--services-image-04)",
        "s05-image": "var(--light-gradient), var(--services-image-05)",
      },
      backgroundColor: {
        menu: "var(--menu-color)",
        input: "var(--input-color)",
      },
      fontSize: {
        title: [
          "2.5rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "-0.1em",
            fontWeight: "100",
          },
        ],
      },
    },
    container: {
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        xl: "1.5rem",
      },
      center: true,
    },
    screens: {
      xs: "320px",
      md: "768px",
      xl: "1280px",
    },
  },
  plugins: [],
};
