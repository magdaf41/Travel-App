import { getDocs, collection, Timestamp } from 'firebase/firestore'
import { db } from '@/config/firebase'

import { fakeBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import { CountriesData } from '@/types/CountriesData'

export const firebaseApi = createApi({
	reducerPath: 'posts',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getFirebaseApi: builder.query<CountriesData[], void>({
			async queryFn() {
				try {
					const countriesCollectionRef = collection(db, 'countries_visited')
					const querySnapshot = await getDocs(countriesCollectionRef)

					const filteredData: CountriesData[] = querySnapshot.docs.map(doc => {
						const data = doc.data()

						return {
							...data,
							id: doc.id,
							tripFinishedAt:
								data.tripFinishedAt instanceof Timestamp ? data.tripFinishedAt.toMillis() : data.tripFinishedAt,
							tripStartedAt:
								data.tripStartedAt instanceof Timestamp ? data.tripStartedAt.toMillis() : data.tripStartedAt,
						} as CountriesData
					})

					return { data: filteredData }
				} catch (error) {
					return {
						error: {
							status: 500,
							data: { message: 'Failed to fetch data. Please try again.' },
						} as FetchBaseQueryError,
					}
				}
			},
		}),
	}),
})

export const { useGetFirebaseApiQuery } = firebaseApi
