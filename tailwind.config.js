import { COLORS } from './src/constants/colors.constant'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: COLORS,
	},
	plugins: [],
}
