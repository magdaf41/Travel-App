import { Input } from '@/components/ui/input'
import { useEffect, useRef } from 'react'

const CountrySearch = ({ value, onChange, filteredCountries, onSelect }) => {
  const listRef = useRef(null)

  const handleClickOutside = event => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      onSelect(null) // Zamyka listę
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative">
      <Input type="text" placeholder="Country" value={value} onChange={onChange} />
      {filteredCountries.length > 0 && (
        <ul ref={listRef} className="absolute border bg-white w-full mt-1 shadow-md rounded-md max-h-48 overflow-y-auto">
          {filteredCountries.map(country => (
            <li
              key={country.cca3}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                onSelect(country) // Aktualizuje `selectedCountry`
              }}
            >
              {country.name.common}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CountrySearch

