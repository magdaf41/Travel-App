import CustomCardContent from '@/components/CustomCardContent'
import { useGetCountriesWithFlagQuery } from '@/api/countiresWithFlag.api'
import { SELECTED_COUNTRIES } from '../MapCard/SELECTED_COUNTRIES'
import LoadingIndicator from '@/components/loader/LoadingIndicator'
import ErrorMessage from '@/components/errors/CountriesDataErrorMessage'
import { CountryWithFlagType } from '@/types/CountriesListWithFlag'
import CountriesListHeader from './CountriesListHeader'
import CountriesGroup from './CountriesGroup'
import { CountriesDataTypes } from '@/types/CountriesData'

const CountriesList = ({ countries }: { countries: CountriesDataTypes[] }) => {
	const { data, error, isLoading } = useGetCountriesWithFlagQuery()

	if (isLoading) return <LoadingIndicator />
	if (error) return <ErrorMessage />

	const filteredCountries = data?.filter(({ name }: CountryWithFlagType) => SELECTED_COUNTRIES.includes(name.common))

	console.log(filteredCountries)

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
		<CustomCardContent>
			<CountriesListHeader numberOfCountries={countries.length} />

			{groupedCountries &&
				Object.entries(groupedCountries).map(([continent, countries]) => (
					// Jak mam rozwiązać problem z tym typem countries bo TS podkreśla mi to i mówi że może być unknown
					<CountriesGroup key={continent} continent={continent} countries={countries} />
				))}
		</CustomCardContent>
	)
}

export default CountriesList
