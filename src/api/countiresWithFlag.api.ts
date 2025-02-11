import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countriesWithFlagApi = createApi({
	reducerPath: 'countriesFlagApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
	endpoints: builder => ({
		getCountriesWithFlag: builder.query<any, void>({
			query: () => '/all',
		}),
	}),
})

export const { useGetCountriesWithFlagQuery } = countriesWithFlagApi
