/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Vazirmatn"],
      },
      boxShadow: {
        lineGrey: ` 0px 0px 2px 1px rgba(0,0,0,0.2)`
      },
    },
  },
  plugins: [

    require('@tailwindcss/forms'),


  ],
}

