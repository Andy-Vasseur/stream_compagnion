// Imports
import { Routes, Route } from 'react-router-dom'

// Pages
import Homepage from './pages/Homepage'
import Preferences from './pages/Preferences'
import Ping from './pages/Ping'

function App(): JSX.Element {
  return (
    <div className="min-h-screen max-h-screen p-4 bg-[#f3f4f6] font-sans">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/ping" element={<Ping />} />
      </Routes>
    </div>
  )
}

export default App
