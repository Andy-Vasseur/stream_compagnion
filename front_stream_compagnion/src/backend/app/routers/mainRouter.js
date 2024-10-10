// Imports
const express = require("express");

// Controllers imports
const mainController = require("../controllers/mainController");

// Router
const router = express.Router();

// Routes
router.get("/", mainController.renderHomePage);

// Exports
module.exports = router;
