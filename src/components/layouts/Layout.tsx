import TopNavbar from '@/components/layouts/Nav/TopNavbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<TopNavbar />
			<main className='container mx-auto px-4 flex-1'>{children}</main>
		</div>
	)
}

export default Layout
