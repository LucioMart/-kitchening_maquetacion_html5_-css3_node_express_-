const fs = require('fs')
const path = require('path')
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'), 'utf-8'))
const categories = require('../data/categories.json')

const { validationResult } = require('express-validator')

module.exports = {
    add: (req, res) => {
        return res.render('productAdd', {
            categories : categories
        })
    },
    detail: (req, res) => {
        return res.render('productDetail', {
            product : products.find(producto => producto.id === +req.params.id)

    })

    },
    search: (req, res) => {
        
    }, 
    store: (req, res) => {
        // res.send(req.body)

        let errors = validationResult(req)
        if(req.fileValidationError) {
            let image = {
                param : 'image',
                msg: req.fileValidationError,
            }
            errors.errors.push(image)
        }
        if(errors.isEmpty()) {
            const { name, description, category } = req.body
            let photos = []
            req.files.forEach(image => {
                photos.push(image.filename)
            })
            let product = {
                id : products.length != 0 ? products[products.lenth - 1].id + 1 : 1,
                name : name.trim(),
                description : description.trim(),
                category,
                photos
            }

            products.push(product)
            fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json', JSON.stringify(products, null, 2), 'utf-8'))
            res.redirect('/')

        } else {
            return res.render('productAdd', {
                categories,
                errors : errors.mapped(),
                old : req.body
            })
        }

    },
    edit: (req, res) => {
        return res.render('productEdit', {
            categories
        })
    }, 
    update: (req, res) => {
        res.send(req.body)
    }, 
    destroy: (req, res) => {

    }

}