
import { useGetWarehousesQuery } from './warehuseQuery.api'
import { useSearchParams } from 'react-router-dom'

const WarehousesComponent = () => {
	const { search } = useSearchParams()
	const { data: warehouses, isLoading, isFetching } = useGetWarehousesQuery({ ...search })

	return <TestComponent data={warehouses} />
}

export default WarehousesComponent
