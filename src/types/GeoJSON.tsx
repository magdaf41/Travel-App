export type CountryFeature = {
	type: 'Feature'
	properties: {
		ADMIN: string
		ISO_A3: string
		ISO_A2: string
	}
	geometry: {
		type: 'MultiPolygon' | 'Polygon'
		coordinates: number[][][][]
	}
}

export type GeoJSONData = {
	type: 'FeatureCollection'
	features: CountryFeature[]
}
