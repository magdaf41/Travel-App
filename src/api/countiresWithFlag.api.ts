
import { baseApi } from './base.api'
import { CountryWithFlagType } from '@/types/CountriesListWithFlag'

export const countriesWithFlagApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getCountriesWithFlag: builder.query<CountryWithFlagType[], void>({
			query: () => ({
				url: '/all',
				meta: { baseUrl: 'https://restcountries.com/v3.1' },
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetCountriesWithFlagQuery } = countriesWithFlagApi
