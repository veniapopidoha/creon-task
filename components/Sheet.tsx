'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/utils'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...properties }, reference) => (
	<SheetPrimitive.Overlay
		className={cn(
			'fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...properties}
		ref={reference}
	/>
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

interface SheetContentProperties
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {}

const SheetContent = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Content>,
	SheetContentProperties
>(({ className, children, ...properties }, reference) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Content
			ref={reference}
			className={cn(
				'fixed  inset-y-0 right-0 z-[100000000] h-full w-2/3 gap-4 bg-black px-2 py-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:w-3/4  sm:max-w-sm md:p-6 md:px-6',
				className
			)}
			{...properties}>
			{children}
		</SheetPrimitive.Content>
	</SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
	className,
	...properties
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col space-y-2 text-center sm:text-left',
			className
		)}
		{...properties}
	/>
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({
	className,
	...properties
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
			className
		)}
		{...properties}
	/>
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...properties }, reference) => (
	<SheetPrimitive.Title
		ref={reference}
		className={cn('text-foreground text-lg font-semibold', className)}
		{...properties}
	/>
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...properties }, reference) => (
	<SheetPrimitive.Description
		ref={reference}
		className={cn('text-muted-foreground text-sm', className)}
		{...properties}
	/>
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription
}
