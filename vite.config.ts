import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/beenergy/' : '/beenergy-dev/'
  
  return {
    plugins: [react()],
    base,
  }
})
