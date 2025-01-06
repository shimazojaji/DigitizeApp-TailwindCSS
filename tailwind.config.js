/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Vazirmatn"],
      },
    },
  },
  plugins: [
   
      require('@tailwindcss/forms'),
    
    
  ],
}

