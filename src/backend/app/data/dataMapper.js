// Imports
const client = require('./database')

// DataMapper
const dataMapper = {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // USERS
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async getUsers() {
    const query = {
      text: 'SELECT * FROM users'
    }
    const result = await client.query(query)
    return result.rows
  },

  async newPreference(name, accent_color) {
    const query = {
      text: 'UPDATE users SET name = $1, accent_color = $2 WHERE id = 1',
      values: [name, accent_color]
    }
    await client.query(query)
  },

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Deck
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async getButtons() {
    const query = {
      text: 'SELECT * FROM deck'
    }
    const result = await client.query(query)
    return result.rows
  },

  async newButton(name) {
    const query = {
      text: 'INSERT INTO deck (name) VALUES ($1)',
      values: [name]
    }
    await client.query(query)
  }
}

// Exports
module.exports = dataMapper
