import Image from 'next/image'

export const SocialMediaLinks = [
	{
		title: 'Telegram',
		link: 'https://t.me/',
		icon: require('../public/images/social-media/Telegram.svg')
	},
	{
		title: 'Discord',
		link: 'https://discord.com/',
		icon: require('../public/images/social-media/Discord.svg')
	},
	{
		title: 'Twitter',
		link: 'https://twitter.com/',
		icon: require('../public/images/social-media/Twitter.svg')
	}
]

export const Footer = () => (
	<div className='z-50 items-center justify-between px-[2%] md:flex md:h-[84px] xl:px-[8%]'>
		<div className='flex gap-[90px]'>
			<p className='text-sm font-light text-white'>
				© Creon 2023. All rights reserved.
			</p>

			<div className='flex gap-2'>
				{SocialMediaLinks.map(element => (
					<a href={element.link}>
						<Image
							className='cursor-pointer'
							src={element.icon}
							width={32}
							height={32}
							key={element.title}
							alt={element.title}
						/>
					</a>
				))}
			</div>
		</div>
		<div className='z-50 my-4 flex items-center gap-14 md:my-0'>
			<Image
				src={require('../public/images/Niftables-logo.svg')}
				alt={'Niftables'}
				width={200}
				height={40}
			/>
		</div>
	</div>
)
