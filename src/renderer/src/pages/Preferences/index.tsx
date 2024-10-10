// Imports
import { useState } from 'react'
import axios from 'axios'

// Components
import Ping from '../Ping'

function Preferences(): JSX.Element {
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const accent_color = formData.get('color') as string

    try {
      await axios.patch('http://localhost:3310/user/preferences', {
        name,
        accent_color
      })
      setSuccessMessage('Préférences enregistrées avec succès.')
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des préférences:', error)
      setSuccessMessage('Erreur lors de la sauvegarde des préférences.')
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Préférences</h1>

      {successMessage && (
        <div className="mt-4 p-2 bg-green-200 text-green-800 rounded-md">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit} method="post" className="pb-4 border-b-2 border-black">
        <div className="flex justify-between items-center w-4/5">
          <div className="flex flex-col mt-6 w-2/5">
            <label htmlFor="name" className="mb-2">
              Nom d&apos;utilisateur:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Entrez le nom d'utilisateur..."
              className="mb-4 p-2 border-black rounded-md shadow-md focus:outline-amber-500"
            />
          </div>
          <div className="flex flex-col mt-6 w-2/5">
            <label htmlFor="name" className="mb-2">
              Couleur d&apos;accentuation:
            </label>
            <input
              type="color"
              id="color"
              name="color"
              className="mb-4 p-1 border-black rounded-md shadow-md focus:outline-amber-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-2 py-2 px-4 text-white rounded-md shadow-md bg-neutral-950 transition-colors hover:bg-neutral-700"
        >
          Enregistrer
        </button>
      </form>

      <div className="mt-4">
        <Ping />
      </div>
    </div>
  )
}

export default Preferences
