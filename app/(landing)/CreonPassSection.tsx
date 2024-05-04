import { cn } from '@/utils'
import { monument } from '@/public/font/font'
import Button from '@/components/button/Button'

export const bonusOfUsingCreon = [
	'Pre-launch investment opportunities for upcoming AI projects',
	'Free and early access to Creon built AI projects',
	'Higher allocation limits on the Creon AI Launchpad',
	'Revenue share distribution from Creon built AI projects'
]

export const CreonPassSection = () => (
	<div
		id='creon-pass'
		className='mx-[2%] mt-[240px] items-center md:flex md:justify-between xl:mx-[8%]'>
		<div className='md:w-1/2'>
			<h3
				className={cn(
					`border-b-[1px] border-greyLine pb-[30px] text-xl uppercase md:text-5xl xl:text-6xl`,
					monument.className
				)}>
				Creon Pass <br /> NFT
			</h3>

			<h3 className='gradientText  mb-[30px] pt-[30px] text-md md:text-xl'>
				The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
				and a ticket to generate passive income through AI-driven tools
			</h3>

			{bonusOfUsingCreon.map(bonus => (
				<div
					key={bonus}
					className='mt-[10px] flex items-center rounded-[6px] border-[1px] border-greyLine p-[18px]  px-[18px]'>
					<p className='text-md text-white'> {bonus}</p>
				</div>
			))}

			<Button variant={'rainbow'} className='mt-[20px] w-full md:mt-[72px]'>
				Buy Creon Pass
			</Button>
		</div>

		<div className='md:w-1/2'>
			<div className='relative h-full w-full'>
				<video loop autoPlay muted preload='none' width={808} height={808}>
					<source src='../videos/nft-video.mp4' type='video/mp4' />
				</video>
				<div className='absolute  left-0 right-0 top-0 h-full w-full bg-gradient-to-b  from-[#000000] via-transparent bg-center' />
				<div className='absolute  left-0 right-0 top-0 h-full w-full bg-gradient-to-t  from-[#000000]  via-transparent bg-center' />
			</div>
		</div>
	</div>
)
