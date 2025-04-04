import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { useGetCountriesWithCoordinatesQuery } from '@/api/countriesWithCoordinatesApi.api'
import { CountryFeature, GeoJSONData } from '@/types/GeoJSON'

import LoadingIndicator from '@/components/loader/LoadingIndicator'
import ErrorMessage from '@/components/errors/CountriesDataErrorMessage'
import SelectedCountries from './SelectedCountries'
import { useFirebaseCountries } from '@/hooks/useFirebaseCountries'
import { CountriesData } from '@/types/CountriesData'

const CountriesWithCoordinates = () => {
	const { data, error, isLoading } = useGetCountriesWithCoordinatesQuery()
	const [geoData, setGeoData] = useState<GeoJSONData | null>(null)
	const { content, data: visitedCountries } = useFirebaseCountries()
	const [visitedCountriesNames, setVisitedCountriesNames] = useState<string[]>([])

	if (content) return content
	useEffect(() => {
		if (!data?.features || !visitedCountries) return

		const countries = visitedCountries.map((country: CountriesData) => country.name) 
		setVisitedCountriesNames(countries)

		setGeoData({
			type: 'FeatureCollection',
			features: data.features.filter((feature: CountryFeature) => countries.includes(feature.properties.ADMIN)),
		})
	}, [data, visitedCountries])

	if (isLoading) return <LoadingIndicator />
	if (error) {
		return <ErrorMessage error={error} />
	}

	return <SelectedCountries geoData={geoData} countriesName={visitedCountriesNames} />
}

export default CountriesWithCoordinates
