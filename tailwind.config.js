/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Inter_600SemiBold",
        subtitle: "Inter_500Medium",
        body: "Inter_400Regular",
        bold: "Inter_700Bold",
      },
    },
  },
  plugins: [
  ],
}

