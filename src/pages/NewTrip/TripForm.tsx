import { useGetCountriesWithFlagQuery } from '@/api/countiresWithFlag.api'
import { useAddCountryMutation } from '@/api/firebaseApi.api'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import CountrySearch from './CountrySearch'
import DatePicker from './DatePicker'

const TripForm = () => {
	const { data: countries } = useGetCountriesWithFlagQuery()
	const [addCountry, { isLoading }] = useAddCountryMutation()
	const [searchValue, setSearchValue] = useState('')
	const [filteredCountries, setFilteredCountries] = useState([])
	const [selectedCountry, setSelectedCountry] = useState(null)
	const [tripStartedAt, setTripStartedAt] = useState(null)
	const [tripFinishedAt, setTripFinishedAt] = useState(null)
	const [purpose, setPurpose] = useState('')
	const [feedbackMessage, setFeedbackMessage] = useState({ type: '', text: '' })

	const handleSearchChange = event => {
		const inputValue = event.target.value
		setSearchValue(inputValue)
		setSelectedCountry(null)
		if (countries) {
			setFilteredCountries(
				countries.filter(country => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
			)
		}
	}

	const handleAddTrip = async () => {
		setFeedbackMessage({ type: '', text: '' })

		if (!selectedCountry || !tripStartedAt || !tripFinishedAt || !purpose) {
			setFeedbackMessage({ type: 'error', text: 'Please fill in all fields correctly.' })
			return
		}

		try {
			await addCountry({
				name: selectedCountry.name.common,
				continent: selectedCountry.continents?.[0] || 'Unknown',
				flag: selectedCountry.flags?.svg || '',
				capital: selectedCountry.capital?.[0] || 'Unknown',
				tripStartedAt,
				tripFinishedAt,
				purpose,
			}).unwrap()
			setFeedbackMessage({ type: 'success', text: 'Trip added successfully!' })
			setSearchValue('')
			setSelectedCountry(null)
			setTripStartedAt(null)
			setTripFinishedAt(null)
			setPurpose('')
		} catch (error) {
			setFeedbackMessage({ type: 'error', text: 'Failed to add trip. Please try again.' })
		}
	}

	return (
		<div className='space-y-4'>
			{feedbackMessage.text && (
				<p className={feedbackMessage.type === 'error' ? 'text-red-500' : 'text-green-500'}>{feedbackMessage.text}</p>
			)}
			<CountrySearch
				value={searchValue}
				onChange={handleSearchChange}
				filteredCountries={filteredCountries}
				onSelect={country => {
					setSelectedCountry(country) // Aktualizacja
					setSearchValue(country.name.common) // Wpisuje nazwę do inputa
					setFilteredCountries([]) // Ukrywa podpowiedzi
				}}
			/>
			<DatePicker label='Select Start Date' selectedDate={tripStartedAt} onSelect={setTripStartedAt} />
			<DatePicker label='Select End Date' selectedDate={tripFinishedAt} onSelect={setTripFinishedAt} />
			<Select onValueChange={setPurpose} value={purpose}>
				<SelectTrigger>
					<SelectValue placeholder='Select Purpose' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='tourist'>Tourist</SelectItem>
					<SelectItem value='business'>Business</SelectItem>
					<SelectItem value='family'>Family</SelectItem>
				</SelectContent>
			</Select>
			<Button onClick={handleAddTrip} className='w-full' disabled={isLoading}>
				{isLoading ? 'Adding...' : 'Add New Trip'}
			</Button>
		</div>
	)
}

export default TripForm
