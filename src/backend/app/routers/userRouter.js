// Imports
const express = require('express')

// Controllers imports
const userController = require('../controllers/userController')

// Router
const router = express.Router()

// Routes
router.get('/', userController.getAllUsers)
router.patch('/preferences', userController.addPreference)

// Exports
module.exports = router
