/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'widescreen': { 'raw': '(min-aspect-ratio: 3/2' },
				'tallscreen': { 'raw': '(min-aspect-ratio: 13/20'},
			},
			keyframs: {
				'open-menu': {
					'0%' : { transform: 'scaleY(0)'},
					'80%' : { transform: 'scaleY(1.2)'},
					'100%' : { transform: 'scaleY(1)'}
				}
			},
			animation: {
				'open-menu': 'open-menu 0.5s ease-in-out forwards'
			}
		},
	},
	plugins: [],
}
