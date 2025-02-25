import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countriesWithCoordinatesApi = createApi({
	reducerPath: 'countriesApi',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	endpoints: builder => ({
		getCountriesWithCoordinates: builder.query<any, void>({
			query: () => 'https://r2.datahub.io/clvyjaryy0000la0cxieg4o8o/main/raw/data/countries.geojson',
		}),
	}),
})

export const { useGetCountriesWithCoordinatesQuery } = countriesWithCoordinatesApi
