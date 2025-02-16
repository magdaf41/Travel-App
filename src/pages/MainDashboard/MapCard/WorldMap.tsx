import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngBounds } from 'leaflet'
import CountriesWithCoordinates from './CountriesWithCoordinates'

const WORLD_BOUNDS = new LatLngBounds([
	[-90, -180],
	[90, 180],
])

const MAP_STYLE = { height: '100vh', width: '100%' }

const WorldMap = () => (
	<MapContainer bounds={WORLD_BOUNDS} maxBounds={WORLD_BOUNDS} maxBoundsViscosity={1.0} style={MAP_STYLE}>
		<TileLayer
			url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			attribution='&copy; OpenStreetMap contributors'
		/>
		<CountriesWithCoordinates />
	</MapContainer>
)

export default WorldMap
