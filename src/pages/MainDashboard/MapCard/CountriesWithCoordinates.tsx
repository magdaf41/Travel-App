import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { useGetCountriesWithCoordinatesQuery } from '@/api/base.api'
import { CountryFeature, GeoJSONData } from '@/types/GeoJSON'

import LoadingIndicator from '@/components/loader/LoadingIndicator'
import { SELECTED_COUNTRIES } from './SELECTED_COUNTRIES'
import ErrorMessage from '@/components/errors/CountriesDataErrorMessage'
import SelectedCountries from './SelectedCountries'

const CountriesWithCoordinates: React.FC = () => {
	const { data, error, isLoading } = useGetCountriesWithCoordinatesQuery()
	const [geoData, setGeoData] = useState<GeoJSONData | null>(null)

	useEffect(() => {
		if (data?.features) {
			setGeoData({
				type: 'FeatureCollection',
				features: data.features.filter((feature: CountryFeature) => SELECTED_COUNTRIES.has(feature.properties.ADMIN)),
			})
		}
	}, [data])

	if (isLoading) return <LoadingIndicator />
	if (error) return <ErrorMessage />

	return <SelectedCountries geoData={geoData} />
}

export default CountriesWithCoordinates
