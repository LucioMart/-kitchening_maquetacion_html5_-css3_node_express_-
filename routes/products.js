const express = require('express')
const router = express.Router()
const {add, detail, search, store, edit, update, destroy} = require('../controller/productsController')
const productsAddValidator = require('../validations/productsAddValidator')

router.get('/add', add)
router.get('/detail/:id', detail)
router.get('/search', search)
router.post('/add',productsAddValidator, store)
router.get('/edit/:id', edit)
router.put('/update/:id', update)
router.delete('/delete/:id', destroy)


module.exports = router