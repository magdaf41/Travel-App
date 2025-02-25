import Dashboard from '@/pages/MainDashboard/Dashboard'
import NewTrip from '@/pages/NewTrip'
import Stats from '@/pages/Stats'
import TripTracker from '@/pages/TravelLog'

const ROUTES = [
	{ path: '/', label: 'Dashboard', element: <Dashboard /> },
	{ path: '/stats', label: 'Stats', element: <Stats /> },
	{ path: '/trip-tracker', label: 'Trip Tacker', element: <TripTracker /> },
	{ path: '/new-trip', label: 'New Trip', element: <NewTrip /> },
]

export default ROUTES
