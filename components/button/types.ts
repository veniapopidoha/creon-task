import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type DefaultButtonProperties = Pick<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
	'onClick' | 'type' | 'disabled' | 'children' | 'className' | 'style'
>

export interface ButtonProperties extends DefaultButtonProperties {
	isLoading?: boolean
	disabled?: boolean
	variant?: 'rainbow' | 'outline'
	children?: string
	fullWidth?: boolean
}
