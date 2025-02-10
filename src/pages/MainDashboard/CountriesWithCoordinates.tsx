import React, { useEffect, useState } from 'react'
import { GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useGetCountriesWithCoordinatesQuery } from '@/api/base.api'
import { CountryFeature, GeoJSONData } from '@/types/GeoJSON'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const SELECTED_COUNTRIES = new Set([
	'France',
	'Italy',
	'Poland',
	'Germany',
	'Thailand',
	'Vietnam',
	'United Arab Emirates',
	'Turkey',
	'Sweden',
	'Slovakia',
	'Hungary',
	'Netherlands',
	'Czech Republic',
	'Republic of Serbia',
	'Montenegro',
	'Bosnia and Herzegovina',
	'Belgium',
	'Lithuania',
])

const getCountryStyle = (countryName: string) => ({
	fillColor: SELECTED_COUNTRIES.has(countryName) ? '#3352ff' : '#cccccc',
	weight: 1,
	color: '#cccccc',
	fillOpacity: 0.7,
})

const CountriesWithCoordinates: React.FC = () => {
	const { data, error, isLoading } = useGetCountriesWithCoordinatesQuery()
	const [geoData, setGeoData] = useState<GeoJSONData | null>(null)

	useEffect(() => {
		if (data?.features) {
			setGeoData({
				type: 'FeatureCollection',
				features: data.features.filter((feature: { properties: { ADMIN: string } }): feature is CountryFeature =>
					SELECTED_COUNTRIES.has(feature.properties.ADMIN)
				),
			})
		}
	}, [data])

	if (error) return <p>There was an error</p>
	if (isLoading) return <Loader2 className={cn('my-28 h-16 w-16 text-primary/60 animate-spin')} />

	return geoData ? (
		<GeoJSON data={geoData} style={feature => getCountryStyle(feature?.properties?.ADMIN)} />
	) : (
		<p>Loading...</p>
	)
}

export default CountriesWithCoordinates
