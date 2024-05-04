import { NavigationBar } from '@/components/NavigationBar'
import { cn } from '@/utils'
import { monument } from '@/public/font/font'

export const FirstSection = () => (
	<div className='min-h-screen'>
		<div className='relative'>
			<video
				loop
				autoPlay
				muted
				preload='none'
				className=' absolute inset-0  z-[-1] h-screen w-screen object-cover'
				// add overflow video
			>
				<source src='../videos/main-background-video.mp4' type='video/mp4' />
			</video>
			<div className='absolute h-screen w-screen bg-gradient-to-b from-[rgba(171,35,255,0.2)] via-[rgba(59,139,255,0.2)] to-[#000000]' />
		</div>
		<NavigationBar />

		<div
			className={cn(
				'absolute bottom-20 mt-auto flex w-full items-center px-[2%] md:px-[8%]'
			)}>
			<div className='z-10'>
				<div className='mt-auto'>
					<h1
						className={cn(
							`text-md uppercase md:text-5xl xl:text-6xl`,
							monument.className
						)}>
						The world's first <br /> platform for Tokenizing <br /> AI
						blockchain projects
					</h1>
					<h3
						className='gradientText mt-[40px] w-fit border-b border-t p-1 text-md font-bold xl:text-xl'
						style={{
							borderImage: 'linear-gradient(to right, #3D8BFF, #AB23FF) 1'
						}}>
						Hold the Creon Pass NFT and earn passive income from AI Tools
					</h3>
				</div>
			</div>
		</div>
	</div>
)
