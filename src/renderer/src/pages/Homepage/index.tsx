// Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Services
import OBSService from '../../services/obsService'

function Homepage(): JSX.Element {
  const username = localStorage.getItem('username')
  const [isConnected, setIsConnected] = useState(false)

  const connectToOBS = async (): Promise<void> => {
    const address = '192.168.0.38' // L'adresse par défaut du WebSocket OBS
    const password = 'CpkxIPwbcffpVWuA' // Utilise ton mot de passe OBS ici
    await OBSService.connect(address, password)
    setIsConnected(true)
  }

  const startStream = async (): Promise<void> => {
    if (isConnected) {
      await OBSService.startStreaming()
    } else {
      alert('Not connected to OBS')
    }
  }

  const stopStream = async (): Promise<void> => {
    if (isConnected) {
      await OBSService.stopStreaming()
    } else {
      alert('Not connected to OBS')
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hey, {username}</h1>
      <p className="mt-4 text-lg">Welcome to your Stream Compagnion!</p>
      <p className="mt-4 mb-6 text-lg">
        This is a simple app to help you manage your streaming experience.
      </p>
      <Link to="/deck" className="text-lg underline">
        <p className="mb-3 text-blue-600">Go to your deck</p>
      </Link>
      <Link to="/preferences" className="text-lg underline">
        <p className="text-blue-600">Préférences</p>
      </Link>
      <div>
        <button onClick={connectToOBS} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Connect to OBS
        </button>
        <button
          onClick={startStream}
          className="mt-6 mx-4  bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {' '}
          Start Streaming
        </button>
        <button onClick={stopStream} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg">
          {' '}
          Stop Streaming
        </button>
      </div>
    </div>
  )
}

export default Homepage
