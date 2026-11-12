/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        background: '#F6F0E6',
        foreground: '#38271F',
        primary: { DEFAULT: '#142A24', foreground: '#F6F0E6' },
        secondary: { DEFAULT: '#DDD2C1', foreground: '#38271F' },
        accent: { DEFAULT: '#B69A62', foreground: '#142A24' },
        muted: { DEFAULT: '#EAE1D2', foreground: '#6B5A4C' },
        card: { DEFAULT: '#FBF7EF', foreground: '#38271F' },
        border: '#CDBFA8',
        input: '#CDBFA8',
        ring: '#B69A62',
        success: { DEFAULT: '#2F6B4F', foreground: '#F6F0E6' },
        warning: { DEFAULT: '#A8741A', foreground: '#142A24' },
        destructive: { DEFAULT: '#9B2C2C', foreground: '#F6F0E6' },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'var(--radius)',
        md: 'var(--radius)',
        lg: 'var(--radius)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      transitionTimingFunction: {
        royal: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};