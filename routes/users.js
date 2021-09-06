const express = require('express')
const router = express.Router()

const { register, login, processRegister, processLogin, profile, logout, update } = require('../controller/usersController')
const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
const profileValidator = require('../validations/profileValidator')

router.get('/register', register)
router.post('/register', registerValidator, processRegister)
router.get('/login', login)
router.post('/login', loginValidator, processLogin)

router.get('/profile', profile, profileValidator, update)
router.get('/logout', logout)

module.exports = router