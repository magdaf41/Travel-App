import { CountriesDataTypes } from '@/types/CountriesData'

const CountriesCard = ({ country, continent, flag, alt }: CountriesDataTypes) => {
	return (
		<div className='  flex flex-wrap justify-between gap-3 '>
			<section className='flex justify-between gap-3 '>
				<div className=' h-12 w-12 p-1'>
					<img width={200} height={200} src={flag} alt={alt} />
				</div>
				<div className='text-sm'>
					<p>{country}</p>
				</div>
			</section>
		</div>
	)
}

export default CountriesCard
