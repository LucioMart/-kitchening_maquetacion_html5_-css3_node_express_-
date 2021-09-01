const express = require('express')
const router = express.Router()
const {add, detail, search, store, edit, update, destroy} = require('../controller/productsController')

router.get('/add', add)
router.get('/detail/:id', detail)
router.get('/search', search)
router.post('/add', store)
router.get('/edit/:id', edit)
router.put('/update/:id')
router.delete('/delete/:id')


module.exports = router