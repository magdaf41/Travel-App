import { useFirebaseCountries } from '@/hooks/useFirebaseCountries'
import CountriesList from './CountriesList'

const CountriesListContainer = () => {
	const { content, data: visitedCountries } = useFirebaseCountries()

	if (content) return content
	return <CountriesList countries={visitedCountries} />
}

export default CountriesListContainer
