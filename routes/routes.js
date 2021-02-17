const express = require('express')
const app = express()
const routes = express.Router()
const homeController = require('../controllers/homeController')
const validateController = require('../controllers/validateController')

routes.get('/', homeController.home)
routes.post('/', validateController.validate)

module.exports = routes