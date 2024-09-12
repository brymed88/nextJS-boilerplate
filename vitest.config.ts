import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
     plugins: [react()],
     test: {
          globals: true,
          environment: 'jsdom',
          alias: {
               '@/': new URL('./', import.meta.url).pathname,
          },
     },
})
