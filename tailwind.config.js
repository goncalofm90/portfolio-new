/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#3b82f6", // blue-500 (like link blue)
        primaryLight: "#93c5fd", // blue-300
        accent: "#10b981", // emerald-500
        accentLight: "#6ee7b7", // emerald-300
        darkGray: "#1f2937", // gray-800
        lightGray: "#f3f4f6", // gray-100
      },
      transitionProperty: {
        "text-color": "color",
        underline: "text-decoration-color",
      },
    },
  },
  plugins: [],
};
