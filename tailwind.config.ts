import type { Config } from 'tailwindcss'

const config: Config = {
     content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx,mjs}', './features/**/*.{ts,tsx}'],
     theme: {
          extend: {},
     },
     plugins: [
          require('tailwindcss-animate'),
          require('tailwindcss'),
          require('autoprefixer'),
     ],
}
export default config
