import Logo from '../public/Logo.svg'
import Image from 'next/image'
import Button from '@/components/button/Button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTrigger
} from '@/components/Sheet'
import { Menu, X } from 'lucide-react'
import * as React from 'react'
import { SocialMediaLinks } from '@/components/Footer'

const navigationElements = [
	{
		title: 'Creon Pass',
		link: '#creon-pass'
	},
	{
		title: 'Token',
		link: '#token',
		isSoon: true
	},
	{
		title: 'AI Revenue',
		link: '#ai-revenue',
		isSoon: true
	},
	{
		title: 'AI Launchpad',
		link: '#ai-launchpad',
		isSoon: true
	}
]

export const NavigationBar = () => (
	<div className='z-50 mx-auto flex items-center justify-between px-[2%] pt-7 md:px-[5%]'>
		<Image
			priority
			objectFit='contain'
			width={140}
			className='z-[10000000] h-[25px] w-[100px] md:h-[35px] md:w-[140px]'
			height={35}
			src={Logo}
			alt='Logo'
		/>
		<div className=' z-50 hidden items-center gap-14 xl:flex'>
			<div className='flex gap-10'>
				{navigationElements.map(element => (
					<div className='flex gap-1' key={element.link}>
						<a href={element.link} className=' text-md  text-white'>
							{element.title}
						</a>
						{element.isSoon ? (
							<div className='z-50 flex h-[18px] items-center rounded-full bg-black px-1.5 text-[10px] font-bold uppercase'>
								<p className=' gradientText'>Soon</p>
							</div>
						) : null}
					</div>
				))}
			</div>
			<Button variant='outline'>Connect </Button>
		</div>
		<div className='z-50 block xl:hidden'>
			<Sheet>
				<SheetTrigger asChild>
					<div className='z-50 cursor-pointer rounded-md border-2 border-white p-1'>
						<Menu size={24} height={32} width={32} />
					</div>
				</SheetTrigger>

				<SheetContent>
					<SheetHeader>
						<div className='absolute right-4 top-4 flex  items-center'>
							<Button className='ml-auto mr-4' variant='outline'>
								Connect
							</Button>
							<SheetClose className=' rounded-md bg-blue p-1.5'>
								<X className='h-8 w-8' />
								<span className='sr-only'>Close</span>
							</SheetClose>
						</div>
					</SheetHeader>
					<div className=' flex h-full flex-col justify-between'>
						<div className='mt-[48px] flex flex-col gap-4'>
							{navigationElements.map(element => (
								<div
									className='flex  gap-1 border-t-2 border-greyLine pt-4'
									key={element.link}>
									<SheetClose className='w-full'>
										<a href={element.link} className='w-full'>
											<div className='flex'>
												<p className=' flex text-md  text-white'>
													{element.title}
												</p>
												{element.isSoon ? (
													<div className='z-50 rounded-full bg-black px-1.5'>
														<p className=' gradientText'>Soon</p>
													</div>
												) : null}
											</div>
										</a>
									</SheetClose>
								</div>
							))}
						</div>
						<div className=' flex gap-2'>
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
				</SheetContent>
			</Sheet>
		</div>
	</div>
)
