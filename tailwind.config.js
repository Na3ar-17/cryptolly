import plugin from 'tailwindcss/plugin'
import { COLORS } from './src/constants/colors.constant'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: COLORS,
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.button-gradient-primary': {
					background: 'linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%)',
				},
				'.button-gradient-secondary': {
					background: 'linear-gradient(226.55deg, #18c8ff 7%, #933ffe 29.53%)',
				},
				'.button-gradient-active': {
					background:
						'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%) ',
				},
			})
		}),
	],
}
