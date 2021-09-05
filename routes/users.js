const express = require('express')
const router = express.Router()

const { register, login, processRegister, processLogin, profile, logout } = require('../controller/usersController')
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')

router.get('/register', register)
router.post('/register', registerValidator, processRegister)
router.get('/login', login)
router.post('/login', loginValidator, processLogin)

router.get('/profile', profile)
router.get('/logout', logout)

module.exports = router