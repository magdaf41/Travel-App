import LoadingIndicator from '@/components/loader/LoadingIndicator'
import ErrorMessage from '@/components/errors/CountriesDataErrorMessage'
import CountriesList from './CountriesList'
import useCountriesFetcher from '@/hooks/useCountriesFetcher'

const CountriesListContainer = () => {
	const { countryList, isLoading, error } = useCountriesFetcher()

	if (isLoading) return <LoadingIndicator />
	if (error) return <ErrorMessage error={error} />

	return <CountriesList countries={countryList} />
}

export default CountriesListContainer
