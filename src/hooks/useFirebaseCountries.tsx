import { useGetFirebaseApiQuery } from '@/api/firebaseApi.api'
import ErrorMessage from '@/components/errors/CountriesDataErrorMessage'
import LoadingIndicator from '@/components/loader/LoadingIndicator'
import { CountriesDataTypes } from '@/types/CountriesData'
import { ReactNode } from 'react'

interface FirebaseCountriesResponse {
	content: ReactNode | null
	data: CountriesDataTypes[]
}

export const useFirebaseCountries = (): FirebaseCountriesResponse => {
	const { data, isLoading, error } = useGetFirebaseApiQuery()
	let content: ReactNode | null = null

	if (isLoading) {
		content = <LoadingIndicator />
	} else if (error) {
		content = <ErrorMessage error={error} />
	}

	return { content, data: data ?? [] } 
}
