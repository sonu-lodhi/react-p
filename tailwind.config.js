/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        left: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform:'translateX(0%)' },
        },
        rotate: {
          '0%': { opacity: '0' ,
          transform: 'translateY(100%)'
        },
          '100%': { opacity:'1',
          transform:'translateY(0%)'
        },
        }
      },
      animation: {
        left:'left 1s ease-in-out',
        rotate: 'rotate 1s ease-in-out'
      }
    },
  },
  plugins: [],
}

