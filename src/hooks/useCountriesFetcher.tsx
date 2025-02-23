import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { CountriesDataTypes } from '@/types/CountriesData'

interface UseCountriesFetcherResult {
	countryList: CountriesDataTypes[]
	isLoading: boolean
	error: string | null
}

const useCountriesFetcher = (): UseCountriesFetcherResult => {
	const [countryList, setCountryList] = useState<CountriesDataTypes[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const countriesCollectionRef = collection(db, 'countries_visited')

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const data = await getDocs(countriesCollectionRef)
				const filteredData: CountriesDataTypes[] = data.docs.map(doc => ({
					...(doc.data() as CountriesDataTypes),
					id: doc.id,
				}))

				setCountryList(filteredData)
			} catch (err) {
				setError('Failed to fetch data. Please try again.')
				console.error('Error fetching countries from Firebase:', err)
			} finally {
				setIsLoading(false)
			}
		}

		fetchCountries()
	}, [])

	return { countryList, isLoading, error }
}

export default useCountriesFetcher
