/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.js", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins_400Regular"],
        "poppins-400regular": ["Poppins_400Regular"],
        "poppins-bold": ["Poppins_700Bold"],
        "poppins-semiBold": ["Poppins_600SemiBold"],
        "poppins-500medium": ["Poppins_500Medium"],
      },
    },
  },
  plugins: [],
};
