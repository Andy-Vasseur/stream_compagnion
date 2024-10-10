// Imports
import { Link } from 'react-router-dom'

function Homepage(): JSX.Element {
  const username = localStorage.getItem('username')

  return (
    <div>
      <h1 className="text-3xl font-semibold underline">Hey, {username}</h1>
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
    </div>
  )
}

export default Homepage
