import { Routes, Route } from 'react-router-dom'

import Layout from './components/layouts/Layout'
import Stats from './pages/Stats'

import { Dashboard } from './pages/MainDashboard/Dashboard'
import React from 'react'
import NewTrip from './pages/NewTrip'
import TripTracker from './pages/TravelLog'

const RouteWithLayout = ({ element }: { element: React.ReactNode }) => <Layout>{element}</Layout>

export default function App() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Routes>
				<Route path='/' element={<RouteWithLayout element={<Dashboard />} />} />
				<Route path='/stats' element={<RouteWithLayout element={<Stats />} />} />
				<Route path='/trip-tracker' element={<RouteWithLayout element={<TripTracker />} />} />
				<Route path='/new-trip' element={<RouteWithLayout element={<NewTrip />} />} />
			</Routes>
		</div>
	)
}
