import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export type StatDashboardCardProps = {
	title: string
	value: string | number
	subtitle: string
}

const StatDashboardCard = ({ title, value, subtitle }: StatDashboardCardProps) => (
	<Card>
		<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
			<CardTitle className='text-sm font-medium'>{title}</CardTitle>
		</CardHeader>
		<CardContent>
			<p className='text-2xl font-bold'>{value}</p>
			<p className='text-xs text-muted-foreground'>{subtitle}</p>
		</CardContent>
	</Card>
)

export default StatDashboardCard
