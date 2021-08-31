const express = require('express')
const router = express.Router()
const {add} = require('../controller/productsController')

router.get('/add', add)


module.exports = router