import { Timestamp } from 'firebase/firestore'

export type CountriesDataTypes = {
	id: string
	capitol: string
	continent: string
	flag: string
	howManyTimesVisited: number
	name: string
	purpose: string
	tripFinishedAt: Timestamp
	tripStartedAt: Timestamp
}
