import { useEffect, useState } from 'react'

function Ping(): JSX.Element {
  const [serverStatus, setServerStatus] = useState<string | null>(null)

  const pingBackend = async () => {
    try {
      const response = await fetch('http://localhost:3310/ping')
      const data = await response.json()
      setServerStatus(data.message)
    } catch (error) {
      setServerStatus('Backend non disponible')
    }
  }

  useEffect(() => {
    pingBackend()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-semibold underline">Ping</h1>
      <p className="mt-4 text-lg">This is the Ping page.</p>
      <div className="mt-4">
        <p className="text-lg">Statut du serveur : {serverStatus || 'Vérification...'}</p>
      </div>
    </div>
  )
}

export default Ping
