const express = require('express')
const router = express.Router()

const { register, login, processRegister } = require('../controller/usersController')
const registerValidator = require('../validations/registerValidator')

router.get('/register', register)
router.post('/register', registerValidator, processRegister)
router.get('/login', login)
router.post('/login')

module.exports = router