import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Stats from './pages/Stats'
import NewTrip from './pages/NewTrip'
import TripTracker from './pages/TravelLog'
import Dashboard from './pages/MainDashboard/Dashboard'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/stats' element={<Stats />} />
					<Route path='/trip-tracker' element={<TripTracker />} />
					<Route path='/new-trip' element={<NewTrip />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
