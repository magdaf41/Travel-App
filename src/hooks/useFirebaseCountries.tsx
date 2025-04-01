import { useGetFirebaseApiQuery } from '@/api/firebaseApi.api'
import LoadingIndicator from '@/components/loader/LoadingIndicator'
import ErrorMessage from '@/components/errors/CountriesDataErrorMessage'

export const useFirebaseCountries = () => {
	const { data, isLoading, error } = useGetFirebaseApiQuery()

	if (isLoading) {
		return { content: <LoadingIndicator />, data: [] }
	}

	if (error) {
		return { content: <ErrorMessage error={error} />, data: [] }
	}

	return { content: null, data: data ?? [] }
}
