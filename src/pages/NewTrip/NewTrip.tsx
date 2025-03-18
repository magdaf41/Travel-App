import { useState, useEffect, useRef } from 'react'
import TripForm from './TripForm'

export default function NewTrip() {
	const [filteredCountries, setFilteredCountries] = useState([])

	const listRef = useRef(null)

	const handleClickOutside = event => {
		if (listRef.current && !listRef.current.contains(event.target)) {
			setFilteredCountries([]) // Ukrywa listę wyników
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div style={{ position: 'relative' }}>
			<TripForm />
		</div>
	)
}
