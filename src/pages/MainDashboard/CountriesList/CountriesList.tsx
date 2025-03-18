import CountriesListHeader from './CountriesListHeader'
import CountriesGroup from './CountriesGroup'
import { CountriesData } from '@/types/CountriesData'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CountriesList = ({ countries }: { countries: CountriesData[] }) => {
	const navigate = useNavigate()
	const groupedCountries = countries?.reduce((acc: Record<string, CountriesData[]>, country: CountriesData) => {
		const continent = country.continent || 'Unknown continent'
		acc[continent] = acc[continent] || []
		acc[continent].push(country)
		return acc
	}, {})
	const handleNewTripClick = () => {
		navigate('/new-trip')
	}
	return (
		<div>
			<div className='flex items-center justify-between mb-4'>
				<CountriesListHeader numberOfCountries={countries.length} />
				<Button variant='outline' size='icon' onClick={handleNewTripClick}>
					<Plus />
				</Button>
			</div>

			{groupedCountries &&
				Object.entries(groupedCountries).map(([continent, countries]) => (
					<CountriesGroup key={continent} continent={continent} countries={countries} />
				))}
		</div>
	)
}

export default CountriesList
