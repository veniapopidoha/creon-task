'use client'
import { cn } from '@/utils'
import { monument } from '@/public/font/font'
import Image from 'next/image'
import CreonImage from '@/public/images/CREON 1.png'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/Accordion'
import { ProfitabilityAndGrowth } from '@/app/(landing)/vision-section/icons/ProfitabilityAndGrowth'
import { TransparentFairDecentralizedEarnings } from '@/app/(landing)/vision-section/icons/TransparentFairDecentralizedEarnings'
import { LaunchingTheFuture } from '@/app/(landing)/vision-section/icons/LaunchingTheFuture'
import { LimitlessPossibilitiesOfAiCrypto } from '@/app/(landing)/vision-section/icons/LimitlessPossibilitiesOfAiCrypto'
import { useState } from 'react'

const AccordionElements = [
	{
		title: 'Profitability and Growth',
		icon: (active: boolean) => <ProfitabilityAndGrowth active={active} />,
		description: `At Creon, we handpick cutting-edge AI projects and offer our
community and token holders early access and investment
opportunities. Our community actively contributes to the growth
and profitability of these projects, creating a dynamic ecosystem
of innovation and shared success.`
	},
	{
		title: 'Transparent & Fair Decentralized Earnings',
		icon: (active: boolean) => (
			<TransparentFairDecentralizedEarnings active={active} />
		),
		description: `At Creon, we handpick cutting-edge AI projects and offer our
community and token holders early access and investment
opportunities. Our community actively contributes to the growth
and profitability of these projects, creating a dynamic ecosystem
of innovation and shared success.`
	},
	{
		title: 'Launching the future',
		icon: (active: boolean) => <LaunchingTheFuture active={active} />,
		description: `At Creon, we handpick cutting-edge AI projects and offer our
community and token holders early access and investment
opportunities. Our community actively contributes to the growth
and profitability of these projects, creating a dynamic ecosystem
of innovation and shared success.`
	},
	{
		title: `Limitless Possibilities of AI & Crypto`,
		icon: (active: boolean) => (
			<LimitlessPossibilitiesOfAiCrypto active={active} />
		),
		description: `At Creon, we handpick cutting-edge AI projects and offer our
community and token holders early access and investment
opportunities. Our community actively contributes to the growth
and profitability of these projects, creating a dynamic ecosystem
of innovation and shared success.`
	}
]

export const OutVisionSection = () => {
	const [activeDropDown, setActiveDropDown] = useState<string[]>([])
	console.log(activeDropDown)
	return (
		<div
			className={
				'mx-[2%] mt-[230px] xl:mx-[8%] xl:flex xl:justify-between xl:gap-[80px]  2xl:gap-[180px]'
			}>
			<div className='xl:w-2/3'>
				<h3
					className={cn(
						`pb-[30px]  text-xl uppercase xl:text-2xl 2xl:text-3xl`,
						monument.className
					)}>
					Our vision is to support the innovation of AI blockchain projects
					<i className='gradientText not-italic'>
						while prioritizing communities and democratizing profits
					</i>
				</h3>
				<Image
					className='xl:ml-[100px]'
					src={CreonImage}
					alt={'Creon'}
					width={955}
					height={855}
				/>
			</div>
			<div className='xl:w-2/3'>
				<Accordion type='multiple'>
					{AccordionElements.map(item => (
						<AccordionItem value={item.title}>
							<AccordionTrigger
								onClick={() => {
									if (activeDropDown.includes(item.title)) {
										console.log('Some', 'remove', item.title)
										setActiveDropDown(previousState =>
											previousState.filter(value => value !== item.title)
										)
									} else {
										setActiveDropDown(previousState => [
											...previousState,
											item.title
										])
									}
								}}>
								<div className='flex items-center gap-2 xl:gap-7'>
									<div>{item.icon(activeDropDown.includes(item.title))}</div>
									<h5 className='text-left text-lg text-white transition-all  duration-300 hover:text-blue xl:text-xl'>
										{item.title}
									</h5>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div className='xl:ml-[128px]'>{item.description}</div>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	)
}
