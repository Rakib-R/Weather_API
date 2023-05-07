/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}',
              
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
      extend: { height: 
        {
      'screen-minus-2.5rem': 'calc(100vh-2.5rem)',
    },
      top:{
        '16' : '16rem'
      }
  },
  },
  plugins: [
    
    require("tailwind-scrollbar-hide"),
    require('flowbite/plugin')
  ],

  variants: {
  }
}
