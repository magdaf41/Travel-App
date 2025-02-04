import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import CountriesList from './CountriesList'
import { CardContent } from '@/components/Card'
import StatDashboardCard from './StatDashboardCard'

const MapCard = () => (
	<Card className='col-span-3'>
		<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
			<CardTitle className='text-sm font-medium'>Done Trip</CardTitle>
		</CardHeader>
		<CardContent>
			<div>
				<img
					width={800}
					height={800}
					src='https://img.freepik.com/darmowe-wektory/podstawowa-mapa-ziemi-kontynenty_78370-2988.jpg?t=st=1738615451~exp=1738619051~hmac=a8d673ad1443c54f6e6be4f4e9cc3dff94770fb829941c45ad09591aeb5cb45f&w=740'
					alt='map'
				/>
			</div>
		</CardContent>
	</Card>
)

export function Dashboard() {
	return (
		<div className='p-6 space-y-6'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				<StatDashboardCard title='Done Trip' value='24' subtitle='since 2020' />
				<StatDashboardCard title='Countries visited' value='35' subtitle='5 last year' />
				<StatDashboardCard title='Last trip' value='Dubai' subtitle='3 weeks ago' />
				<StatDashboardCard title='Next trip' value='Cypr' subtitle='in 5 weeks' />
			</div>
			<div className='grid grid-cols-4 gap-6'>
				<CountriesList />
				<MapCard />
			</div>
		</div>
	)
}
