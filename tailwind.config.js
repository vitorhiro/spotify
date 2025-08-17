module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "var(--color-primary-main)",
          dark: "var(--color-primary-dark)",
        },
        neutral: {
          100: "var(--color-neutral-100)",
        },
        background: "var(--color-background-app)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
};
