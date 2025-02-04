export type CountriesCardProps = {
	country: string
	continent: string
	flag: string
}

export default function CountriesCard(props: CountriesCardProps) {
	return (
		<div className='  flex flex-wrap justify-between gap-3 '>
			<section className='flex justify-between gap-3 '>
				<div className=' h-12 w-12 rounded-full bg-gray-100 p-1'>
					<img width={200} height={200} src={props.flag} alt='avatar' />
				</div>
				<div className='text-sm'>
					<p>{props.country}</p>
					<div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px]  sm:w-auto  text-gray-400'>
						{props.continent}
					</div>
				</div>
			</section>
		</div>
	)
}
