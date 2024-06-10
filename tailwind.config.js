/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        strongCyan : 'hsl(172, 67%, 45%)',
        veryDarkCyan : 'hsl(183, 100%, 15%)',
        darkGrayishCyan : 'hsl(186, 14%, 43%)',
        grayishCyan : " hsl(184, 14%, 56%)",
        lightgrayishCyan : 'hsl(185, 41%, 84%)',
        veryLightGrayishCyan : "hsl(189, 41%, 97%)",
        customColor : "hsl(171, 66%, 45%)"

      }
    },
  },
  plugins: [],
}

