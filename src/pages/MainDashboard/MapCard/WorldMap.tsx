import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngBounds } from 'leaflet'
import CountriesWithCoordinates from './CountriesWithCoordinates'

const WorldMap: React.FC = () => {
	const worldBounds = new LatLngBounds([
		[-90, -180],
		[90, 180],
	])

	return (
		<MapContainer
			bounds={worldBounds}
			maxBounds={worldBounds}
			maxBoundsViscosity={1.0}
			style={{ height: '100vh', width: '100%' }}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; OpenStreetMap contributors'
			/>
			<CountriesWithCoordinates />
		</MapContainer>
	)
}

export default WorldMap
