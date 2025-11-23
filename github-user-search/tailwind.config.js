/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cli: {
          bg: '#0c0c0c',
          fg: '#cccccc',
          bright: '#ffffff',
          cyan: '#00d7ff',
          green: '#00ff87',
          yellow: '#ffff00',
          red: '#ff5555',
          magenta: '#ff79c6',
          blue: '#8be9fd',
          gray: '#6272a4',
          border: '#44475a',
        }
      },
      fontFamily: {
        mono: ['Courier New', 'Consolas', 'Monaco', 'monospace'],
      }
    },
  },
  plugins: [],
}
