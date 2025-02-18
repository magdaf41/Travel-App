import { CardTitle } from '@/components/ui/card'
import { SELECTED_COUNTRIES } from '../MapCard/SELECTED_COUNTRIES'

const CountriesListHeader = () => (
	<section>
		<CardTitle className='text-sm font-medium'>My Travels</CardTitle>
		<p className='text-xs text-muted-foreground'>{SELECTED_COUNTRIES.length}</p>
	</section>
)

export default CountriesListHeader
