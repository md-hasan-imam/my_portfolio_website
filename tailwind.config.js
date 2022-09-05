/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#6DF6A3',
      'primary-light': '#dce9e1',
      'primary-dark':"#16983C",
      'secondary': '#F1F5F9',
      'accent': '#a1a1b3',

      'bg-primary': '#0A192F',
      'bg-secondary': '#172A45',

      'bg-gray':'#c6c6d1',
      'overlay-primary': '#172A45',

      'html-color': '#EA580C',
      'css-color': '#3B82F6',
      'js-color': '#FACC15',
      'ts-color': '#0284C7',
      'react-color': '#0EA5E9',
      'next-color': '#FFFFFF',
      'express-color': '#22C55E',
      'node-color': '#16A34A',
      'git-color': '#EA580C',
      'firebase-color': '#F7C427',
      'stripe-color': '#6366F1',
      'mongo-color': '#22C55E',
      'bootstrap-color': '#673ab7',
      'redux-color': '#764ABD',

      'white': '#ffffff',
      'black': '#222222',
      'grey': '#52525B',
    },
    extend: {},
  },
  plugins: [],
}