import CountriesCard from '@/components/CountriesCard'
import { CountryWithFlagType } from '@/types/CountriesListWithFlag'

type Props = {
	continent: string
	countries: CountryWithFlagType[]
}

const CountriesGroup = ({ continent, countries }: Props) => (
	<div key={continent} className='mb-6'>
		<h3 className='text-lg font-semibold'>
			{continent} ({countries.length})
		</h3>
		<div className='flex flex-wrap gap-4'>
			{countries.map(({ name, flags }) => (
				<CountriesCard
					key={name.common}
					flag={flags?.svg || 'unknown flag'}
					alt={`Flaga ${name.common}`}
					country={name.common}
				/>
			))}
		</div>
	</div>
)

export default CountriesGroup
