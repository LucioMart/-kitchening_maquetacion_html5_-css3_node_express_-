const fs = require('fs')
const path = require('path')
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'), 'utf-8'))
const categories = require('../data/categories.json')

module.exports = {
    add: (req, res) => {
        return res.render('productAdd')
    }
}