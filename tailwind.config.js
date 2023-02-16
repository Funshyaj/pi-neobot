/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        'regal-blue': '#243c5a',
        'cerulean': 'hsla(195, 86%, 27%, 1)',
'moonstone': 'hsla(185, 89%, 37%, 1)',
'verdigris': 'hsla(183, 73%, 42%, 1)',
'black': 'hsla(0, 0%, 0%, 1)',
'dark-green': 'hsla(180, 100%, 7%, 1)',
        
      },
    },
  },
  plugins: [],
}