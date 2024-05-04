import type { Config } from 'tailwindcss'

const config = {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	prefix: '',
	theme: {
		extend: {
			fontSize: {
				'6xl': '68px', // 68px
				'3xl': '38px', // 38px
				'2xl': '32px',
				xl: '22px', // 22px
				md: '18px', // 18px
				sm: '16px' // 16px
			},
			colors: {
				purple: '#AB23FF',
				blue: '#3D8BFF',
				black: '#000000',
				white: '#FFFFFF',
				greyText: '#46505F',
				greyLine: '#13171D',
				transparent: 'transparent'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
