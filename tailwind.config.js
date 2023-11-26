/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
      '128': '32rem',
      },
      keyframes: {
          load: {
            '0%, 100%': { letterSpacing: '0.2rem' },
            '50%': { letterSpacing: '2rem' },
          }
      }
      
    }
  },
  
  
  plugins: [
      require('flowbite/plugin')
  ]
  
}

