import { CardTitle } from '@/components/ui/card'

const CountriesListHeader = ({ numberOfCountries }: { numberOfCountries: number[] }) => (
	<section>
		<CardTitle className='text-sm font-medium'>My Travels</CardTitle>
		<p className='text-xs text-muted-foreground'>{numberOfCountries}</p>
	</section>
)

export default CountriesListHeader
