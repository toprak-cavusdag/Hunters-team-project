/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
    colors: {
      'Hunter-color': '#db5416',
      'Hunter-black': '#000',
      'text-white': '#fff',
      'gray-500': '#64748b',
    },
  },
  plugins: [],
};
