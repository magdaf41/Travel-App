import { baseApi } from '@/api/base.api'
import {
	PagedRequestDef,
	PagedResponseBackendDef,
	RequestEntityDef,
	ResponseEntityDef,
} from '@/folderForExercise/api.types'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

const pagedRequestParams = (data: PagedRequestDef): string => {
	const result = new URLSearchParams(
		Object.entries({
			page: data.page?.toString() ?? '0',
			pageSize: data.size?.toString() ?? '20',
			sortType: data.sortType ?? 'asc',
			sortBy: data.sortBy ?? 'lastModifiedAt',
			queryFilter: data.queryFilter ? JSON.stringify({ filters: data.queryFilter }) : '',
		})
	).toString()

	return result
}

export const injectGetItems = <T extends Partial<RequestEntityDef>>(name: string, tag: string, route: string) => {
	const enhancedApi = baseApi.enhanceEndpoints({ addTagTypes: [tag] })

	const entityApi = enhancedApi.injectEndpoints({
		endpoints: build => ({
			[name]: build.query<PagedResponseBackendDef<T[]>, PagedRequestDef>({
				query: params => ({
					url: route,
					method: 'GET',
					params: pagedRequestParams(params),
				}),

				providesTags: result =>
					result?.data
						? [
								...result.data.map(({ id: iri }) => ({
									type: tag,
									id: iri,
								})),
								{ type: tag, id: 'LIST' },
							]
						: [{ type: tag, id: 'LIST' }],
			}),
		}),
	})

	return entityApi
}

export const injectGetItem = <T>(name: string, tag: string, route: string) => {
	const enhancedApi = baseApi.enhanceEndpoints({ addTagTypes: [tag] })

	const entityApi = enhancedApi.injectEndpoints({
		endpoints: build => ({
			[name]: build.query<ResponseEntityDef<T>, string>({
				query: iri => ({
					url: `${route}/${iri}`,
					method: 'GET',
					withoutBaseUrl: false,
				}),
				transformResponse: (response: T) => ({ data: response, status: 200 }),
				transformErrorResponse: (error: FetchBaseQueryError) => ({
					status: error.status,
					message: error.data,
				}),
				providesTags: (result, error, iri) => [{ type: tag, id: iri }],
			}),
		}),
	})

	return entityApi
}

export const injectAddItem = <T>(name: string, tag: string, route: string) => {
	const enhancedApi = baseApi.enhanceEndpoints({ addTagTypes: [tag] })

	const entityApi = enhancedApi.injectEndpoints({
		endpoints: build => ({
			[name]: build.mutation<ResponseEntityDef<T>, Partial<T>>({
				query: data => ({ url: route, method: 'POST', body: data }),
				transformResponse: (response: T) => ({ data: response, status: 200 }),
				transformErrorResponse: (error: FetchBaseQueryError) => ({
					status: error.status,
					message: error.data,
				}),
				invalidatesTags: [{ type: tag, id: 'LIST' }],
			}),
		}),
	})

	return entityApi
}

export const injectUpdateItem = <T extends RequestEntityDef>(name: string, tag: string, route: string) => {
	const enhancedApi = baseApi.enhanceEndpoints({ addTagTypes: [tag] })

	const entityApi = enhancedApi.injectEndpoints({
		endpoints: build => ({
			[name]: build.mutation<ResponseEntityDef<T>, T>({
				query: data => ({
					url: `${route}/${data.id}`,
					method: 'PUT',
					body: data,
				}),
				transformResponse: (response: T) => ({ data: response, status: 200 }),
				transformErrorResponse: (error: FetchBaseQueryError) => ({
					status: error.status,
					message: error.data,
				}),
				invalidatesTags: (result, error, { id: iri }) => [{ type: tag, id: iri }],
			}),
		}),
	})

	return entityApi
}

export const injectDeleteItem = (name: string, tag: string, route: string) => {
	const enhancedApi = baseApi.enhanceEndpoints({ addTagTypes: [tag] })

	const entityApi = enhancedApi.injectEndpoints({
		endpoints: build => ({
			[name]: build.mutation<ResponseEntityDef<void>, string>({
				query: iri => ({ url: `${route}/${iri}}`, method: 'DELETE' }),
				transformErrorResponse: (error: FetchBaseQueryError) => ({
					status: error.status,
					message: error.data,
				}),
				invalidatesTags: [{ type: tag, id: 'LIST' }],
			}),
		}),
	})

	return entityApi
}
