import { CountryWithFlag } from '@/types/CountriesListWithFlag'
import { baseApi } from './base.api'

export const countriesWithFlagApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getCountriesWithFlag: builder.query<CountryWithFlag[], void>({
			query: () => ({
				url: '/all',
				meta: { baseUrl: 'https://restcountries.com/v3.1' },
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetCountriesWithFlagQuery } = countriesWithFlagApi
