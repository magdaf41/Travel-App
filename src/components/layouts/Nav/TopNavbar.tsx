import { Link } from 'react-router-dom'
import LogInComponent from '../User/LogIn'
import NavLinks from './NavLinks'

const TopNavbar = () => {
	return (
		<nav className='bg-white text-gray-800 shadow-md'>
			<div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
				<div className='logo text-2xl font-semibold'>
					<Link to='/'>MyApp</Link>
				</div>
				<NavLinks />
				<LogInComponent />
			</div>
		</nav>
	)
}

export default TopNavbar
