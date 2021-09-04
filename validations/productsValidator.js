const { check } = require('express-validator')


module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('description')
    .isLength({
        min : 20
    }).withMessage('La descripción debe tener como minimo 20 caracteres.'),

    check('category')
    .notEmpty().withMessage('Debes indicar la categoria.')
]

