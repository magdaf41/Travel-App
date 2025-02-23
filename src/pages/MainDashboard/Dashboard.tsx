import useCountriesFetcher from '@/hooks/useCountriesFetcher'
import CountriesListContainer from './CountriesList/CountriesListContainer'
import WorldMap from './MapCard/WorldMap'
import StatDashboardCard from './StatDashboardCard'
import { Card } from '@/components/ui/card'

const Dashboard = () => {
	const { countryList } = useCountriesFetcher()
	return (
		<div className='p-4 space-y-4'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				<StatDashboardCard title='Done Trip' value='24' subtitle='since 2020' />
				<StatDashboardCard title='Countries visited' value={countryList.length} subtitle='5 last year' />
				<StatDashboardCard title='Last trip' value='Dubai' subtitle='3 weeks ago' />
				<StatDashboardCard title='Next trip' value='Cypr' subtitle='in 5 weeks' />
			</div>

			<div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-4'>
				<Card className='p-4 col-span-1'>
					<CountriesListContainer />
				</Card>
				<Card className='p-4 col-span-3'>
					<WorldMap />
				</Card>
			</div>
		</div>
	)
}

export default Dashboard
