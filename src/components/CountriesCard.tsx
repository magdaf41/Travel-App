export type Props = {
	name: string
	flag: string
}

const CountriesCard = ({ name, flag }: Props) => {
	return (
		<div className='  flex flex-wrap justify-between gap-3 '>
			<section className='flex justify-between gap-3 '>
				<div className=' h-12 w-12 p-1'>
					<img width={200} height={200} src={flag} alt={`Flag ${name}`} />
				</div>
				<div className='text-sm'>
					<p>{name}</p>
				</div>
			</section>
		</div>
	)
}

export default CountriesCard
