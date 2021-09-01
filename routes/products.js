const express = require('express')
const router = express.Router()
const {add, detail} = require('../controller/productsController')

router.get('/add', add)
router.get('/detail/:id', detail)


module.exports = router