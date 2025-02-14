import clsx from 'clsx'
import { Link } from 'react-router-dom'

type Props = {
	path: string
	children: string
	isActive: boolean
}

const NavItem = ({ path, children, isActive }: Props) => {
	const classNameLink = clsx(
		'px-4 py-2 rounded-lg transition duration-300 ease-in-out',
		isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-200'
	)
	return (
		<li>
			<Link className={classNameLink} to={path}>
				{children}
			</Link>
		</li>
	)
}

export default NavItem
