// Imports
import { Routes, Route } from 'react-router-dom'

// Pages
import Homepage from './pages/Homepage'
import Deck from './pages/Deck'
import Preferences from './pages/Preferences'

function App(): JSX.Element {
  return (
    <div className="min-h-screen max-h-screen p-4 text-white bg-neutral-800 font-sans">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </div>
  )
}

export default App
