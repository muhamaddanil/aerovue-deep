/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aerovue-dark': '#16232A',
        'aerovue-primary': '#FF5B04',
        'aerovue-secondary': '#10367D',
        'aerovue-light': '#F5EBE1',
        'aerovue-grey-900': '#091B25',
        'aerovue-grey-700': '#535F66',
        'aerovue-grey-500': '#848D92',
        'aerovue-grey-300': '#B5BBBE',
        'aerovue-grey-100': '#E6E8E9',
        'aerovue-grey-border': '#F3F3F4',
        'aerovue-grey-white': '#F9F9F9',
        'neutral-100': '#0A0A0A',
        'neutral-90': '#4A4B4C',
        'neutral-30': '#DDE1E5',
        'neutral-10': '#FFFFFF',
      },
      fontFamily: {
        'host-grotesk': ['"Host Grotesk"', 'sans-serif'],
        'neue-montreal': ['"Neue Montreal"', 'sans-serif'],
        'greater-theory': ['"Greater Theory"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['72px', { lineHeight: '1', fontWeight: '600' }],
        'heading-2': ['64px', { lineHeight: '1', fontWeight: '500', letterSpacing: '-1.28px' }],
        'heading-3': ['56px', { lineHeight: '1', fontWeight: '600', letterSpacing: '-1.12px' }],
        'heading-4': ['48px', { lineHeight: '1', fontWeight: '600', letterSpacing: '-0.96px' }],
        'heading-5': ['40px', { lineHeight: '1', fontWeight: '600', letterSpacing: '-0.8px' }],
        'heading-6': ['32px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.64px' }],
        'heading-title': ['24px', { lineHeight: '32px', fontWeight: '600', letterSpacing: '-0.48px' }],
        'heading-label': ['16px', { lineHeight: '24px', fontWeight: '700', letterSpacing: '8px' }],
        'body-large': ['18px', { lineHeight: '26px', fontWeight: '400', letterSpacing: '-0.36px' }],
        'link-large': ['18px', { lineHeight: '26px', fontWeight: '500' }],
        'link-normal': ['16px', { lineHeight: '24px', fontWeight: '500' }],
      },
      letterSpacing: {
        'heading': '-0.02em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}