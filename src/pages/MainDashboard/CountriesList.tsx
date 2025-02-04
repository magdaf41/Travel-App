import { CardContent } from '@/components/Card'
import CountriesCard, { CountriesCardProps } from '@/components/CountriesCard'
import { CardTitle } from '@/components/ui/card'

const CountriesList = () => {
	const countriesData: CountriesCardProps[] = [
		{
			country: 'Spain',
			continent: 'Europe',
			flag: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Flag_of_Spain_%28civil%29.svg',
		},
		{
			country: 'Italy',
			continent: 'Europe',
			flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
		},
		{
			country: 'France',
			continent: 'Europe',
			flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_France_%282024-present%29.svg',
		},
		{
			country: 'Croatia',
			continent: 'Europe',
			flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Civil_ensign_of_Croatia.svg',
		},
		{
			country: 'China',
			continent: 'Asia',
			flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		},
	]
	return (
		<CardContent className='flex justify-between gap-4'>
			<section>
				<CardTitle className='text-sm font-medium'>My Travels</CardTitle>
				<p className='text-xs text-muted-foreground'>55 countries</p>
			</section>
			{countriesData.map((d, i) => (
				<CountriesCard key={i} flag={d.flag} country={d.country} continent={d.continent} />
			))}
		</CardContent>
	)
}

export default CountriesList
