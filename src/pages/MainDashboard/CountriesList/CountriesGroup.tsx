import CountriesCard from '@/components/CountriesCard'
import { CountriesDataTypes } from '@/types/CountriesData'

const CountriesGroup = ({ continent, countries }: { continent: string; countries: CountriesDataTypes[] }) => (
	<div key={continent} className='mb-6'>
		<h3 className='text-lg font-semibold'>
			{continent} ({countries.length})
		</h3>
		<div className='flex flex-wrap gap-4'>
			{countries.map(({ id, name, flag }) => (
				<CountriesCard key={id} flag={flag || 'unknown flag'} alt={`Flaga ${name}`} country={name} />
			))}
		</div>
	</div>
)

export default CountriesGroup
