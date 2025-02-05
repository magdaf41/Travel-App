import { CountriesDataTypes } from '@/types/CountriesData'

const CountriesCard = ({ country, continent, flag }: CountriesDataTypes) => {
	return (
		<div className='  flex flex-wrap justify-between gap-3 '>
			<section className='flex justify-between gap-3 '>
				<div className=' h-12 w-12 rounded-full bg-gray-100 p-1'>
					<img width={200} height={200} src={flag} alt={`Flag of ${country}`} />
				</div>
				<div className='text-sm'>
					<p>{country}</p>
					<div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px]  sm:w-auto  text-gray-400'>
						{continent}
					</div>
				</div>
			</section>
		</div>
	)
}

export default CountriesCard
