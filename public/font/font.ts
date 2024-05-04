import localFont from 'next/font/local'

export const satoshi = localFont({
	src: [
		{
			path: './Satoshi-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: './Satoshi-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: './Satoshi-Medium.woff2',
			weight: '500',
			style: 'normal'
		}
	]
})

export const monument = localFont({
	src: './MonumentExtended-Regular.woff2',
	weight: '400',
	style: 'normal'
})
