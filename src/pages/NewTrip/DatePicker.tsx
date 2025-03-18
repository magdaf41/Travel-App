import { Button } from '@/components/ui/button'

import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { format } from 'date-fns'

const DatePicker = ({ label, selectedDate, onSelect }) => (
	<Popover>
		<PopoverTrigger asChild>
			<Button variant='outline'>{selectedDate ? format(selectedDate, 'PPP') : label}</Button>
		</PopoverTrigger>
		<PopoverContent className='w-auto p-0'>
			<Calendar mode='single' selected={selectedDate} onSelect={onSelect} />
		</PopoverContent>
	</Popover>
)

export default DatePicker
