import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import NavItem from './NavItem'
import ROUTES from '@/routes/routes'

const NavLinks = () => {
	const location = useLocation()
	const activePath = useMemo(() => location.pathname, [location.pathname])

	return (
		<ul className='flex space-x-6'>
			{ROUTES.map(({ path, label }) => (
				<NavItem key={path} path={path} isActive={activePath === path}>
					{label}
				</NavItem>
			))}
		</ul>
	)
}

export default NavLinks
