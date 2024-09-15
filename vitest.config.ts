import react from '@vitejs/plugin-react'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
     plugins: [react()],
     test: {
          globals: true,
          environment: 'jsdom',
          mockReset: true,
          include: ['./**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
          coverage: {
               reporter: ['text', 'html'],
               include: ['**/components/**'],
               exclude: ['**/types.ts', ...coverageConfigDefaults.exclude],
          },
          alias: {
               '@/': new URL('./', import.meta.url).pathname,
          },
     },
})
