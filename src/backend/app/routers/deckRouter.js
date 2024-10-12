// Imports
const express = require('express')

// Controllers imports
const deckController = require('../controllers/deckController')

// Router
const router = express.Router()

// Routes
router.get('/', deckController.getAllButtons)
router.post('/', deckController.addNewButton)

// Exports
module.exports = router
