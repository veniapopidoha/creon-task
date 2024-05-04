import { cn } from '@/utils'
import { monument } from '@/public/font/font'

export const ProfitingThroughSection = () => (
	<div className='mt-[240px] w-full px-[2%] xl:px-[8%]'>
		<div className='mb-[76px]'>
			<h3
				className={cn(
					`text-xl uppercase md:text-5xl xl:text-6xl`,
					monument.className
				)}>
				Profiting Through
			</h3>
			<h3
				className={cn(
					`gradientText ml-auto mt-[20px]  text-end  text-xl uppercase md:text-3xl xl:text-3xl`,
					monument.className
				)}>
				AI Innovation & Decentralization
			</h3>
		</div>
		<div className='xl:flex'>
			<div className='w-full xl:w-2/3'>
				<div className='h-full xl:pr-[30px]'>
					<div className='relative w-full overflow-hidden rounded-[6px]'>
						<video loop autoPlay muted preload='none' width={950} height={480}>
							<source src='../videos/creon-logo.mp4' type='video/mp4' />
						</video>
						<div
							// // do  via size more bigger
							className='absolute  bottom-0 left-0 right-0 top-0 h-full w-full bg-center '
						/>
					</div>
				</div>
			</div>
			<div className='pt-2  xl:w-1/3 xl:border-x-2 xl:border-greyLine xl:px-[30px] xl:pt-0'>
				<div className='block'>
					<h4 className='mb-[28px] text-xl font-bold text-white'>
						The dynamic community driven business model of the future.
					</h4>
					<span className='text-md font-normal text-white'>
						At Creon, we blend the power of AI tools with the dynamic crypto and
						NFT markets, utilizing an innovative business model to drive
						profitability. This approach empowers our community, as our NFT and
						token holders directly benefit from the growth and prosperity of the
						Creon network, creating a win-win scenario for both our community
						and for the projects we launch.
					</span>
				</div>
			</div>
		</div>
	</div>
)
