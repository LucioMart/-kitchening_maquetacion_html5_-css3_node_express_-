const express = require('express')
const router = express.Router()

const { register, login, processRegister, processLogin } = require('../controller/usersController')
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')

router.get('/register', register)
router.post('/register', registerValidator, processRegister)
router.get('/login', login)
router.post('/login', loginValidator, processLogin)

module.exports = router