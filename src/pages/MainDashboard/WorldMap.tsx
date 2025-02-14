import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const WorldMap: React.FC = () => {
	return (
		<MapContainer center={[50, 10]} zoom={4} style={{ height: '600px', width: '100%' }}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; OpenStreetMap contributors'
			/>
		</MapContainer>
	)
}

export default WorldMap
