// Imports
const express = require('express')

// Routers imports
const mainRouter = require('./mainRouter')
const userRouter = require('./userRouter')
const deckRouter = require('./deckRouter')

// Router
const router = express.Router()

// Routes
router.use('/', mainRouter)
router.use('/user', userRouter)
router.use('/deck', deckRouter)

// Exports
module.exports = router
