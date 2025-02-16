import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const LoadingIndicator = () => (
	<div className='flex justify-center items-center my-28'>
		<Loader2 className={cn('h-16 w-16 text-primary/60 animate-spin')} />
	</div>
)

export default LoadingIndicator
