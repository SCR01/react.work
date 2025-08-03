import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        darkMode: 'class', // This is crucial for your theme toggle
        theme: {
          extend: {},
        },
        plugins: [],
      }
    }),
  
    react()
  ],
})