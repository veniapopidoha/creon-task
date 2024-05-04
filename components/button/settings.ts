import type { ButtonProperties } from './types'

export const settings: {
	variant: Record<Required<ButtonProperties>['variant'], string>
} = {
	variant: {
		rainbow:
			' bg-gradient-to-r from-[#3d8bff] to-[#ab23ff] text-white  h-14  flex items-center transition-all ease-linear justify-center rounded-[6px] hover:to-[#3d8bff]',
		outline:
			'bg-transparent border-white px-3.5 h-11 flex items-center justify-center rounded-md border-2 border-solid' +
			' hover:bg-blue hover:border-transparent'
	}
}
