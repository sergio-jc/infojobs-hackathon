/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}' // Tremor module
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#167DB7',
        'main-gray': '#F5F5F5',
        'txt-gray': '#89898A',
        'txt-thin-gray': '#E5E5E5'
      }
    }
  },
  plugins: []
}
