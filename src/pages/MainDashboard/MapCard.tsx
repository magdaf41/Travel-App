import CustomCardContent from '@/components/CustomCardContent'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const MapCard = () => (
	<Card className='col-span-3'>
		<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
			<CardTitle className='text-sm font-medium'>Done Trip</CardTitle>
		</CardHeader>
		<CustomCardContent>
			<div>
				<img
					width={800}
					height={800}
					src='https://img.freepik.com/darmowe-wektory/podstawowa-mapa-ziemi-kontynenty_78370-2988.jpg?t=st=1738615451~exp=1738619051~hmac=a8d673ad1443c54f6e6be4f4e9cc3dff94770fb829941c45ad09591aeb5cb45f&w=740'
					alt='map'
				/>
			</div>
		</CustomCardContent>
	</Card>
)

export default MapCard
