import { GeoJSONData } from '@/types/GeoJSON'

import { GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useMemo } from 'react'

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
		() => feature => getCountryStyle(feature?.properties?.ADMIN, countriesName),
		[countriesName]
	)
	if (!geoData) return <p className='text-center'>No data available</p>
	// dodalam key żeby wymusić renderowanie, bo bez tego nie zaznaczało mi się odpowiednio odwiedzonych miejsc
	return <GeoJSON key={countriesName.join(',')} data={geoData} style={styleFunction} />
}

export default SelectedCountries
