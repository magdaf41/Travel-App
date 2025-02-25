import clsx from 'clsx'
import { Link } from 'react-router-dom'

type Props = {
	path: string
	children: string
	isActive: boolean
}

const NavItem = ({ path, children, isActive }: Props) => {
	const linkClasses = clsx('text-sm font-medium', {
		'text-blue-500': isActive,
		'text-gray-500': !isActive,
	})
	return (
		<li>
			<Link className={linkClasses} to={path}>
				{children}
			</Link>
		</li>
	)
}

export default NavItem
