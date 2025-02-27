import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const staggeredBaseQueryWithBailOut = retry(
	async (args, api, extraOptions) => {
		const baseUrl = args?.meta?.baseUrl || 'https://default-api-url.com' // domyślny baseUrl

		const result = await fetchBaseQuery({
			baseUrl,
		})(args, api, extraOptions)

		if (result.error) {
			console.error("Api error")
		}

		return {
			...result,
			meta: result.meta ? { ...result.meta, timestamp: Date.now() } : undefined,
		}
	},
	{ maxRetries: 1 }
)

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: staggeredBaseQueryWithBailOut,
	endpoints: () => ({}),
	keepUnusedDataFor: 10,
})
