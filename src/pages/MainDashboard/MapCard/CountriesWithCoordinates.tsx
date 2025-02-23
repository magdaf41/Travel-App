import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { useGetCountriesWithCoordinatesQuery } from '@/api/countriesWithCoordinatesApi.api'
import { CountryFeature, GeoJSONData } from '@/types/GeoJSON'

import LoadingIndicator from '@/components/loader/LoadingIndicator'
import ErrorMessage from '@/components/errors/CountriesDataErrorMessage'
import SelectedCountries from './SelectedCountries'
import useCountriesFetcher from '@/hooks/useCountriesFetcher'

const CountriesWithCoordinates = () => {
	const { data, error, isLoading } = useGetCountriesWithCoordinatesQuery()
	const [geoData, setGeoData] = useState<GeoJSONData | null>(null)
	const { countryList } = useCountriesFetcher()
	const [visitedCountriesName, setVisitedCountriesName] = useState<string[]>([])

	useEffect(() => {
		if (!data?.features) {
			return
		}
		const countries = countryList.map(country => country.name)
		setVisitedCountriesName(countries)
		setGeoData({
			type: 'FeatureCollection',
			features: data.features.filter((feature: CountryFeature) => countries.includes(feature.properties.ADMIN)),
		})
	}, [data, countryList])

	if (isLoading) return <LoadingIndicator />
	if (error) {
		return <ErrorMessage error={error} />
	}

	return <SelectedCountries geoData={geoData} countriesName={visitedCountriesName} />
}

export default CountriesWithCoordinates
