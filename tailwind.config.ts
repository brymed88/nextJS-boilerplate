/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

export default {
     content: [
          './components/**/*.{ts,tsx}',
          './app/**/*.{ts,tsx,mjs}',
          './features/**/*.{ts,tsx}',
     ],
     theme: {
          extend: {},
     },
     plugins: [require('tailwindcss'), require('autoprefixer')],
} satisfies Config
