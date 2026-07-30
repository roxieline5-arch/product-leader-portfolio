import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/product-leader-portfolio/' : '/',
  plugins: [react()],
}))
