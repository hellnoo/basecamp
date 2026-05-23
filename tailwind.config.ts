import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'h-bg':     '#0c150a',
        'h-dark':   '#111e0d',
        'h-card':   '#192613',
        'h-border': '#2c4022',
        'h-red':    '#6db554',
        'h-red-d':  '#519040',
        'h-muted':  '#7a9b6e',
      },
      fontFamily: {
        sans:  ['var(--font-dm-sans)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
