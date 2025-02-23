import CountriesListHeader from './CountriesListHeader'
import CountriesGroup from './CountriesGroup'
import { CountriesDataTypes } from '@/types/CountriesData'

const CountriesList = ({ countries }: { countries: CountriesDataTypes[] }) => {
	const groupedCountries = countries?.reduce(
		(acc: Record<string, CountriesDataTypes[]>, country: CountriesDataTypes) => {
			const continent = country.continent || 'Unknown continent'
			acc[continent] = acc[continent] || []
			acc[continent].push(country)
			return acc
		},
		{}
	)

	return (
		<div>
			<CountriesListHeader numberOfCountries={countries.length} />
			{groupedCountries &&
				Object.entries(groupedCountries).map(([continent, countries]) => (
					<CountriesGroup key={continent} continent={continent} countries={countries} />
				))}
		</div>
	)
}

export default CountriesList
