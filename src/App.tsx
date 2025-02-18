import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import ROUTES from './routes/routes'

export default function App() {
	return (
		<BrowserRouter>
			<div className='flex flex-col min-h-screen'>
				<Routes>
					<Route element={<Layout />}>
						{ROUTES.map(({ path, element, label }) => (
							<Route key={label} path={path} element={element} />
						))}
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}
