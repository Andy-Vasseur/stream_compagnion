// Imports
const dataMapper = require('../data/dataMapper')

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await dataMapper.getUsers()
      res.json(users)
    } catch (error) {
      console.error(error)
      res.status(500).send(`An error occured with the database :\n${error.message}`)
    }
  },

  addPreference: async (req, res) => {
    try {
      const { name, accent_color } = req.body
      await dataMapper.newPreference(name, accent_color)
      res.json({ message: 'Preference added' })
    } catch (error) {
      console.error(error)
      res.status(500).send(`An error occured with the database :\n${error.message}`)
    }
  }
}

// Exports
module.exports = userController
