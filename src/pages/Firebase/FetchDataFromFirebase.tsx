import { useEffect, useState } from 'react'

import { getDocs, collection } from 'firebase/firestore'

import { db } from '@/config/firebase'
import CountriesList from '../MainDashboard/CountriesList/CountriesList'

const FetchDataFromFirebase = () => {
	const [countryList, setCountryList] = useState([])
	const countiresCollectionRef = collection(db, ' countries_visited')
	useEffect(() => {
		const getCountyList = async () => {
			try {
				const data = await getDocs(countiresCollectionRef)
				const filteredData = data.docs.map(doc => ({
					...doc.data(),
					id: doc.id,
				}))
				setCountryList(filteredData)
			} catch (err) {
				console.error(err)
			}
		}

		getCountyList()
	}, [])
	return <CountriesList countries={countryList} />
}

export default FetchDataFromFirebase
