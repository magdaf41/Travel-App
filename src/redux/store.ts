import { countriesWithCoordinatesApi } from '@/api/base.api'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		[countriesWithCoordinatesApi.reducerPath]: countriesWithCoordinatesApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(countriesWithCoordinatesApi.middleware),
})

setupListeners(store.dispatch)
