import CountriesCard from '@/components/CountriesCard'
import { CountriesData } from '@/types/CountriesData'

type Props = {
	continent: string
	countries: CountriesData[]
}

const CountriesGroup = ({ continent, countries }: Props) => (
	<div key={continent} className='mb-6'>
		<h3 className='text-lg font-semibold'>
			{continent} ({countries.length})
		</h3>
		<div className='flex flex-wrap gap-4'>
			{countries.map(({ id, name, flag }) => (
				<CountriesCard key={id} name={name} flag={flag} />
			))}
		</div>
	</div>
)

export default CountriesGroup
