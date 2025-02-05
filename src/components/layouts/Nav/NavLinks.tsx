import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import NavItem from './NavItem'

const NAV_LINKS = [
	{ path: '/', label: 'Home' },
	{ path: '/stats', label: 'Stats' },
	{ path: '/trip-tracker', label: 'Trip Tracker' },
	{ path: '/new-trip', label: 'New Trip' },
]

const NavLinks = () => {
	const location = useLocation()
	const activePath = useMemo(() => location.pathname, [location.pathname])

	return (
		<ul className='flex space-x-6'>
			{NAV_LINKS.map(({ path, label }) => (
				<NavItem key={path} path={path} isActive={activePath === path}>
					{label}
				</NavItem>
			))}
		</ul>
	)
}

export default NavLinks
