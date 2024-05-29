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
        'surface-50': '#fff7ed',
        'surface-100': '#ffedd5',
        'surface-200': '#fed7aa',
        'surface-300': '#fdba74',
        'surface-400': '#fb923c',
        'surface-500': '#f97316',
        'surface-600': '#ea580c',
        'surface-700': '#c2410c',
        'surface-800': '#9a3412',
        'surface-900': '#7c2d12',
        'surface-950': '#431407'
      },
      cursor: {
        left: 'url(@/assets/left-circle.svg), pointer',
        right: 'url(@/assets/right-circle.svg), pointer'
      },
      aspectRatio: {
        '4/3': '4 / 3'
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
}
