import { useState, useCallback } from 'react'
import axios from 'axios'

// Components
import Modal from '../../components/Modal'

interface DeckButton {
  id: number
  label: string
  action: () => void
  isToggled?: boolean
}

function Deck(): JSX.Element {
  const [buttons, setButtons] = useState<DeckButton[]>([
    { id: 1, label: 'Scene', action: (): void => console.log('Switching scene') },
    { id: 2, label: 'Play', action: (): void => toggleButton(2), isToggled: false },
    { id: 3, label: 'Mic', action: (): void => toggleButton(3), isToggled: false },
    { id: 4, label: 'Audio', action: (): void => toggleButton(4), isToggled: false },
    { id: 5, label: 'Camera', action: (): void => toggleButton(5), isToggled: false },
    { id: 6, label: 'Screen', action: (): void => toggleButton(6), isToggled: false },
    { id: 7, label: 'Layout 1', action: (): void => console.log('Switching to Layout 1') },
    { id: 8, label: 'Layout 2', action: (): void => console.log('Switching to Layout 2') }
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newButtonLabel, setNewButtonLabel] = useState('')

  const toggleButton = (id: number): void => {
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id
          ? {
              ...button,
              isToggled: !button.isToggled,
              label: button.isToggled
                ? button.label.replace('Stop', '').replace('Unmute', '').replace('Off', '')
                : `${button.label === 'Play' ? 'Stop' : button.label === 'Mic' || button.label === 'Audio' ? 'Mute' : 'Off'} ${button.label}`
            }
          : button
      )
    )
  }

  const openAddButtonModal = useCallback((): void => {
    setIsModalOpen(true)
    setNewButtonLabel('')
  }, [])

  const closeModal = useCallback((): void => {
    setIsModalOpen(false)
  }, [])

  const addNewButton = useCallback(
    async (event: React.FormEvent): Promise<void> => {
      event.preventDefault()
      if (newButtonLabel.trim() !== '') {
        const newId = buttons.length + 1
        const newButton: DeckButton = {
          id: newId,
          label: newButtonLabel.trim(),
          action: () => console.log(`Button ${newId} clicked`)
        }

        try {
          await axios.post('http://localhost:3310/deck', {
            id: newButton.id,
            name: newButton.label
          })

          setButtons((prevButtons) => [...prevButtons, newButton])
          closeModal()
        } catch (error) {
          console.error("Erreur lors de l'ajout du bouton:", error)
        }
      }
    },
    [buttons.length, newButtonLabel, closeModal]
  )

  return (
    <div className="bg-neutral-900 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Stream Deck</h1>
      <div className="grid grid-cols-4 gap-4">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={button.action}
            className={`w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-2 rounded-lg transition-colors duration-200 flex items-center justify-center ${button.isToggled ? 'bg-blue-600 hover:bg-blue-500' : ''}`}
          >
            <span className="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
              {button.label}
            </span>
          </button>
        ))}
        <button
          onClick={openAddButtonModal}
          className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          <span className="text-sm">+</span>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Ajouter un nouveau bouton">
        <form method="post" className="space-y-4">
          <input
            type="text"
            value={newButtonLabel}
            name="name"
            onChange={(e) => setNewButtonLabel(e.target.value)}
            placeholder="Nom du bouton"
            className="w-full px-3 py-2 text-neutral-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={(e) => addNewButton(e)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Ajouter
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default Deck
