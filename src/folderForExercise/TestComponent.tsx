// To jest wspólny komponent zarówno dla warehouses, hours i jeszcze innych danych więc jak powinnam otypować data, zeby pasowało do stałej struktury danych ale content był różny

interface Props {
	data: any[]
}

const TestComponent: React.FC<Props> = ({ data }) => {
	return <div></div>
}

export default TestComponent
