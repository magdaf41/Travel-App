interface CommonFields {
	id: number
	createdAt: number
}

export interface WarehousesData extends CommonFields {
	warehouse: string
	company: string
}

export interface HoursData extends CommonFields {
	option: string
	hours: string
	hoursAverage: number
}

export type SortDef = {
	sorted: boolean
	unsorted: boolean
	empty: boolean
}

export type PageableDef = {
	pageNumber: number
	pageSize: number
	sort: SortDef
	offset: number
	paged: boolean
	unpaged: boolean
}

export type PagedMetadataBackendDef = {
	empty: boolean
	first: boolean
	last: boolean
	number: number
	numberOfElements: number
	size: number
	totalElements: number
	totalPages: number
	pageable: PageableDef
	sort: SortDef
}

export type PagedResponseBackendDef<T> = {
	content: T[]
	metadata: PagedMetadataBackendDef
}

export type PagedRequestDef = {
	page?: number
	size?: number
	sortType?: 'asc' | 'desc'
	sortBy: string
	queryFilter?: any[]
}

export type ResponseEntityDef<T> = {
	data: T | undefined
	status: number
	message?: string
}

export type RequestEntityDef = {
	id: string
}
