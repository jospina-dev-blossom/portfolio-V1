/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: {
          0: "#E2E8F0", //Titles
          50: "#94A3B8", //Subtitles
          100: "#55D3C2", //Chip text
          150: "#122B39", //Chip background
          200: "#111A26", //Hover cards

        },
      },
    },
  },
  plugins: [],
}

