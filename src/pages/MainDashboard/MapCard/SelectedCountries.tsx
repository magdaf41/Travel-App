import { GeoJSONData } from '@/types/GeoJSON'

import { GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { SELECTED_COUNTRIES } from './SELECTED_COUNTRIES'

const getCountryStyle = (countryName: string) => ({
	fillColor: SELECTED_COUNTRIES.has(countryName) ? '#3352ff' : '#cccccc',
	weight: 1,
	color: '#cccccc',
	fillOpacity: 0.7,
})

const SelectedCountries: React.FC<{ geoData: GeoJSONData | null }> = ({ geoData }) => {
	if (!geoData) return <p className='text-center'>No data available</p>

	return <GeoJSON data={geoData} style={feature => getCountryStyle(feature?.properties?.ADMIN)} />
}

export default SelectedCountries
