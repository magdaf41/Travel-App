import { countriesWithCoordinatesApi } from '@/api/base.api'
import { countriesWithFlagApi } from '@/api/countiresWithFlag.api'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		[countriesWithCoordinatesApi.reducerPath]: countriesWithCoordinatesApi.reducer,
		[countriesWithFlagApi.reducerPath]: countriesWithFlagApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(countriesWithCoordinatesApi.middleware).concat(countriesWithFlagApi.middleware),
})

setupListeners(store.dispatch)
