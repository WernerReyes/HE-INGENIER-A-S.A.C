/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#0A2239",
        "secondary": "#F4A261",
        "tertiary": "#2563eb",
        blue: {
          400: '#60A5FA',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        orange: {
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
        },
      },
    },
  },
  plugins: [],
};