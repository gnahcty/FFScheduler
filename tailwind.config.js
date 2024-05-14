import { addDynamicIconSelectors } from '@iconify/tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-50': '#fff7ed',
        'primary-100': '#ffedd5',
        'primary-200': '#fed7aa',
        'primary-300': '#fdba74',
        'primary-400': '#fb923c',
        'primary-500': '#f97316',
        'primary-600': '#ea580c',
        'primary-700': '#c2410c',
        'primary-800': '#9a3412',
        'primary-900': '#7c2d12',
        'primary-950': '#431407',
        'surface-0': 'rgb(var(--surface-0))',
        'surface-50': 'rgb(var(--surface-50))',
        'surface-100': 'rgb(var(--surface-100))',
        'surface-200': 'rgb(var(--surface-200))',
        'surface-300': 'rgb(var(--surface-300))',
        'surface-400': 'rgb(var(--surface-400))',
        'surface-500': 'rgb(var(--surface-500))',
        'surface-600': 'rgb(var(--surface-600))',
        'surface-700': 'rgb(var(--surface-700))',
        'surface-800': 'rgb(var(--surface-800))',
        'surface-900': 'rgb(var(--surface-900))',
        'surface-950': 'rgb(var(--surface-950))',
        main: {
          yellow: '#F28705',
          orange: '#F23005',
          LBrown: '#8C0E03',
          DBrown: '#590B0B',
          black: '#0D0D0D'
        }
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #0D0D0D, transparent)'
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
}
