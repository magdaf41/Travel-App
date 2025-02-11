import CountriesCard from '@/components/CountriesCard'
import CustomCardContent from '@/components/CustomCardContent'
import { CardTitle } from '@/components/ui/card'
import { useGetCountriesWithFlagQuery } from '@/api/countiresWithFlag.api'
import { SELECTED_COUNTRIES } from '../MapCard/SELECTED_COUNTRIES'

const CountriesList = () => {
	const { data, error, isLoading } = useGetCountriesWithFlagQuery()

	if (isLoading) return <p>Ładowanie danych...</p>
	if (error) return <p>Wystąpił błąd podczas pobierania danych.</p>

	const filteredCountries = data?.filter((country: any) => SELECTED_COUNTRIES.includes(country.name.common))

	const groupedCountries: Record<string, any[]> = {}

	filteredCountries?.forEach(country => {
		const continent = country.continents?.[0] || 'Nieznany kontynent'
		if (!groupedCountries[continent]) {
			groupedCountries[continent] = []
		}
		groupedCountries[continent].push(country)
	})
	return (
		<CustomCardContent>
			<section>
				<CardTitle className='text-sm font-medium'>My Travels</CardTitle>
				<p className='text-xs text-muted-foreground'>{SELECTED_COUNTRIES.length}</p>
			</section>
			{Object.entries(groupedCountries).map(([continent, countries]) => (
				<div key={continent} className='mb-6'>
					<h3 className='text-lg font-semibold'>
						{continent} ({countries.length})
					</h3>
					<div className='flex flex-wrap gap-4'>
						{countries.map(country => (
							<CountriesCard
								key={country.name.common}
								flag={country.flags.svg}
								alt={`Flaga ${country.name.common}`}
								country={country.name.common}
								continent={continent}
							/>
						))}
					</div>
				</div>
			))}
		</CustomCardContent>
	)
}

export default CountriesList
