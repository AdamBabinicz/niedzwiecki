/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//       colors: {
//         primary: "#6153CD",
//       },
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: "1rem",
//           sm: "3rem",
//         },
//       },
//       scrollBehavior: ["scroll"],
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "4.5xl": "4.5rem",
      },
      colors: {
        primary: "#6153CD",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      scrollBehavior: ["scroll"],
      maxHeight: {
        500: "500px", // Dodanie definicji dla max-height: 500px
        80: "80%",
        700: "700px",
      },
      objectFit: {
        contain: "contain",
        cover: "cover",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".touch-none": {
          "touch-action": "none",
        },
      });
    },
  ],
};
