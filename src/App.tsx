import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Stats from './pages/Stats'
import NewTrip from './pages/NewTrip'
import TripTracker from './pages/TravelLog'
import Dashboard from './pages/MainDashboard/Dashboard'

export default function App() {
	return (
		<BrowserRouter>
			<div className='flex flex-col min-h-screen'>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<Dashboard />} />
						<Route path='/stats' element={<Stats />} />
						<Route path='/trip-tracker' element={<TripTracker />} />
						<Route path='/new-trip' element={<NewTrip />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}
