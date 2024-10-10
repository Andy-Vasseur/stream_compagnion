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
  }
}

// Exports
module.exports = dataMapper
