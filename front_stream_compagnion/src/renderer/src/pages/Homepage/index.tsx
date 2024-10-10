import { Link } from 'react-router-dom'

function Homepage(): JSX.Element {
  return (
    <div>
      <h1 className="text-3xl font-semibold underline">Hey, user.name</h1>
      <p className="mt-4 text-lg">Welcome to your Stream Compagnion!</p>
      <p className="mt-4 text-lg">
        This is a simple app to help you manage your streaming experience.
      </p>
      <Link to="/deck" className="mt-4 text-lg underline">
        <p className="text-blue-600">Go to your deck</p>
      </Link>
      <Link to="/ping" className="mt-4 text-lg underline">
        <p className="text-blue-600">Ping</p>
      </Link>
    </div>
  )
}

export default Homepage
