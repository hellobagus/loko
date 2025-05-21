/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff5722',
        secondary: '#2a2a2a',
        accent: '#ffc107',
        background: '#ffffff',
        text: '#333333',
        'light-gray': '#f5f5f5',
        'design': '#e91e63',
        'jepret': '#673ab7',
        'web': '#2196f3',
        'marketing': '#4caf50',
        'konstruksi': '#ff9800',
        'event': '#9c27b0'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 15px 35px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'fade-in-right': 'fadeInRight 0.7s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};