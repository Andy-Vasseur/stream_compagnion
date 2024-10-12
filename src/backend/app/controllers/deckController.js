// Imports
const dataMapper = require('../data/dataMapper')

const deckController = {
  getAllButtons: async (req, res) => {
    try {
      const buttons = await dataMapper.getButtons()
      res.json(buttons)
    } catch (error) {
      console.error(error)
      res.status(500).send(`An error occured with the database :\n${error.message}`)
    }
  },

  addNewButton: async (req, res) => {
    const { name } = req.body
    try {
      await dataMapper.newButton(name)
      res.status(201).send('Button added')
    } catch (error) {
      console.error(error)
      res.status(500).send(`An error occured with the database :\n${error.message}`)
    }
  }
}

// Exports
module.exports = deckController
