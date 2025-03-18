import { useFirebaseCountries } from '@/hooks/useFirebaseCountries'
import CountriesList from './CountriesList'

const CountriesListContainer = () => {
	const { content, data: visitedCountries } = useFirebaseCountries()

	console.log(visitedCountries)

	if (content) return content
	return <CountriesList countries={visitedCountries} />
}

export default CountriesListContainer
