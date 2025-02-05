import React from 'react'

import { cn } from '@/lib/utils'

const CustomCardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
	return <div {...props} className={cn('flex w-full flex-col gap-3 rounded-xl border p-5 shadow', props.className)} />
}

export default CustomCardContent
