import { Link } from 'react-router-dom'

export type NavItemProps = {
	to: string
	children: string
	isActive: boolean
}

const NavItem = ({ to, children, isActive }: NavItemProps) => {
	console.log(to, children, isActive)
	return (
		<li
			className={`px-4 py-2 rounded-lg transition duration-300 ease-in-out ${
				isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-200'
			}`}>
			<Link to={to}>{children}</Link>
		</li>
	)
}

export default NavItem
