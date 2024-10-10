// Imports
const express = require('express')

// Routers imports
const mainRouter = require('./mainRouter')
const userRouter = require('./userRouter')

// Router
const router = express.Router()

// Routes
router.use('/', mainRouter)
router.use('/user', userRouter)

// Exports
module.exports = router
