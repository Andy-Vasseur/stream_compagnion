// Imports
const client = require('./database')

// DataMapper
const dataMapper = {
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
  }
}

// Exports
module.exports = dataMapper
