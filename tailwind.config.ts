import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
      primary: '#2CB6A9',
      'primary-foreground': '#FFFFFF',
      secondary: '#EAF8F6',
      'secondary-foreground': '#2CB6A9',
      background: '#F9FAFB',
      card: '#FFFFFF',
      muted: '#E5E7EB',
      'text-primary': '#111827',
      'text-secondary': '#6B7280',
      },
       fontFamily: {
         sans: ['var(--font-inter-sans)', 'system-ui', 'sans-serif'],
         mono: ['var(--font-geist-mono', 'system-ui', 'sans-serif']
      },
    },
  },
  plugins: [],
}
export default config