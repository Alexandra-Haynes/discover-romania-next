/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "clip-animation": "clip 1s ease-in-out 5.5s forwards",
      },
      keyframes: {
        clip: {
          "0%": { "clip-path": "ellipse(100% 100% at 50% 50%)" },
          "100%": { "clip-path": "ellipse(160% 160% at 50% 160%)" },
        },
      },
      backgroundImage: {
        gradient: 'url("/assets/bg-img.png")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroBg: 'url("/assets/mobileHero.jpg")',
      },
      fontFamily: {
        Quicksand: "Quicksand",
      },
      colors: {
        primary: "#082032",
        secondary: "#334756",
        highlights: "#FF4C29",
        light: "#ECF8F9",
      },
      dropShadow: {
        textShadow: " 1px 0 5px rgba(0, 0, 0, .7)",
      },
    },
  },
  plugins: [],
};
