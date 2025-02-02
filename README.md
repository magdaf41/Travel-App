Travel App

A React + TypeScript project built with Vite, featuring a travel dashboard with interactive maps, travel statistics, and a trip planning tool using various public APIs.

Features

📍 Dashboard – Displays visited and planned destinations on an interactive map.

📊 Travel Statistics – Tracks steps taken daily and visualizes travel data using charts.

🔍 Trip Planning – Allows searching for destinations based on weather, ski resorts, and museums.

Tech Stack

Frontend: React, TypeScript, Vite

Styling: Tailwind CSS

Map: Leaflet.js

Charts: Chart.js

API Requests: Axios

Routing: React Router

APIs Used

OpenWeather API – Fetches weather data for trip planning.

Google Places API – Searches for museums, landmarks, and attractions.

Ski Resort API – Finds ski resorts worldwide.

Mapbox API (Alternative to Leaflet) – For rendering maps.

Installation

Clone the repository:

git clone https://github.com/your-username/travel-app.git
cd travel-app

Install dependencies:

npm install

Create a .env file in the root directory and add your API keys:

VITE_WEATHER_API_KEY=your_openweather_api_key
VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key

Start the development server:

npm run dev

Open http://localhost:5173 in your browser.

Project Structure

/src
  /components
    - Map.tsx        # Interactive map with visited and planned locations
    - StatsChart.tsx  # Travel statistics using Chart.js
    - SearchBar.tsx   # Destination search based on API data
  /pages
    - Dashboard.tsx   # Main dashboard with the map
    - Stats.tsx       # Travel statistics page
    - Plan.tsx        # Trip planning page
  /utils
    - api.ts          # API request helper functions
  - App.tsx          # Main application component
  - main.tsx         # Entry point

Screenshots

🚀 Add screenshots of your app here (once it's built)!

Future Improvements

✅ User authentication (Firebase Auth)

✅ Storing user data (MongoDB/Supabase)

✅ Trip recommendations (TripAdvisor API)

✅ More travel-related insights and analytics


