import TopNavbar from '@/components/layouts/Nav/TopNavbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className='min-h-screen flex flex-col'>
			<TopNavbar />
			<main className='container mx-auto px-4 flex-1'>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
