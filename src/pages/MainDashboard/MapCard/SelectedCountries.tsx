import { GeoJSONData } from '@/types/GeoJSON'

import { GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useMemo } from 'react'

import { Feature, MultiPolygon } from 'geojson'

type CountryFeature = Feature<
	MultiPolygon,
	{
		ADMIN: string
		ISO_A3: string
		ISO_A2: string
	}
>

const getCountryStyle = (countryName: string, countriesName: string[]) => ({
	fillColor: countriesName.includes(countryName) ? '#3352ff' : '#3352ff',
	weight: 1,
	color: '#3352ff',
	fillOpacity: 0.7,
})

const SelectedCountries: React.FC<{ geoData: GeoJSONData | null; countriesName: string[] }> = ({
	geoData,
	countriesName,
}) => {
	const styleFunction = useMemo(
		() => (feature: CountryFeature) => {
			if (!feature) return {}

			return getCountryStyle(feature?.properties?.ADMIN as string, countriesName)
		},
		[countriesName]
	)
	if (!geoData) return <p className='text-center'>No data available</p>
	return <GeoJSON key={countriesName.join(',')} data={geoData} style={styleFunction} />
}

export default SelectedCountries
