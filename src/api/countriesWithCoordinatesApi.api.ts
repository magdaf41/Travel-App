import { CountryFeature, GeoJSONData } from '@/types/GeoJSON'
import { baseApi } from './base.api'

export const countriesWithCoordinatesApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getCountriesWithCoordinates: builder.query<GeoJSONData, void>({
			query: () => ({
				url: 'https://r2.datahub.io/clvyjaryy0000la0cxieg4o8o/main/raw/data/countries.geojson',
				meta: { baseUrl: '' },
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetCountriesWithCoordinatesQuery } = countriesWithCoordinatesApi
