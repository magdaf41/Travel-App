import CountriesList from './CountriesList'
import StatDashboardCard from './StatDashboardCard'
import MapCard from './MapCard'

const Dashboard = () => {
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

export default Dashboard
