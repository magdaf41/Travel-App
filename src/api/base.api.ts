import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const staggeredBaseQueryWithBailOut = retry(
	async (args, api, extraOptions) => {
		const baseUrl = args?.meta?.baseUrl

		const result = await fetchBaseQuery({
			baseUrl,
			async prepareHeaders(headers) {
				return headers
			},
		})(args, api, extraOptions)

		if (result.error) {
			console.log('Something went wrong', 'error')
		}

		return {
			...result,
			meta: result.meta && { ...result.meta, timestamp: Date.now() },
		}
	},
	{ maxRetries: 0 }
)

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: staggeredBaseQueryWithBailOut,
	endpoints: () => ({}),
	keepUnusedDataFor: 10,
})
