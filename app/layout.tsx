import type { Metadata } from 'next'
import './globals.css'
import type { ReactNode } from 'react'
import { satoshi } from '@/public/font/font'

export const metadata: Metadata = {
	title: 'Creon',
	description: 'Creon nft platform'
}

const RootLayout = ({
	children
}: Readonly<{
	children: ReactNode
}>) => (
	<html lang='en'>
		<body className={satoshi.className}>{children}</body>
	</html>
)

export default RootLayout
