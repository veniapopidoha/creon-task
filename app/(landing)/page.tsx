import { FirstSection } from '@/app/(landing)/FirstSection'
import { CreonPassSection } from '@/app/(landing)/CreonPassSection'
import { ProfitingThroughSection } from '@/app/(landing)/ProfitingThroughSection'
import { OutVisionSection } from '@/app/(landing)/vision-section/OutVisionSection'
import { ComingSoonSection } from '@/app/(landing)/ComingSoonSection'
import { NewsSection } from '@/app/(landing)/NewsSection'
import { Footer } from '@/components/Footer'

const Page = () => (
	<main>
		<FirstSection />
		<CreonPassSection />
		<ProfitingThroughSection />
		<OutVisionSection />
		<ComingSoonSection />
		<NewsSection />
		<Footer />
	</main>
)

export default Page
