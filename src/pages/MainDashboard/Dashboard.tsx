import CountriesList from './CountriesList/CountriesList'
import { SELECTED_COUNTRIES } from './MapCard/SELECTED_COUNTRIES'
import WorldMap from './MapCard/WorldMap'
import StatDashboardCard from './StatDashboardCard'

const Dashboard = () => {
	return (
		<div className='p-6 space-y-6'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				<StatDashboardCard title='Done Trip' value='24' subtitle='since 2020' />
				<StatDashboardCard title='Countries visited' value={SELECTED_COUNTRIES.length} subtitle='5 last year' />
				<StatDashboardCard title='Last trip' value='Dubai' subtitle='3 weeks ago' />
				<StatDashboardCard title='Next trip' value='Cypr' subtitle='in 5 weeks' />
			</div>
			<div className='grid grid-cols-4 gap-6 '>
				<div className='col-span-1 p-4 h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
					<CountriesList />
				</div>
				<div className='col-span-3 p-4'>
					<WorldMap />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
