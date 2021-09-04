const express = require('express')
const router = express.Router()
const {add, detail, search, store, edit, update, destroy} = require('../controller/productsController')

const productsValidator = require('../validations/productsValidator')
const productsImageStore = require('../middlewares/productImageStore')


router.get('/add', add)
router.get('/detail/:id', detail)
router.get('/search', search)
router.post('/add',productsValidator, store)
router.get('/edit/:id', edit)
router.put('/update/:id',productsImageStore.array('image'), productsValidator, update)
router.delete('/delete/:id', destroy)


module.exports = router