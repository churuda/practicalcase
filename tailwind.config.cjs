/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // purge: [
  //    './public/**/*.html',
  //    './src/**/*.{js,jsx,ts,tsx,vue}',
  //  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
