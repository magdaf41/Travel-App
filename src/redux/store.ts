import { baseApi } from '@/api/base.api'
import { firebaseApi } from '@/api/firebaseApi.api'

import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		[firebaseApi.reducerPath]: firebaseApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware, firebaseApi.middleware),
})

setupListeners(store.dispatch)
