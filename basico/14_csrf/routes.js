const express = require('express')
const route = express.Router()

// Controllers
const ContactController = require('./src/controllers/ContactController')

route.get('/', ContactController.form)
route.post('/', ContactController.data)

module.exports = route