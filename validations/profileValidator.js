const { check, body } = require('express-validator')
const users = require('../data/users.json')
const bcript = require('bcryptjs')

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio.'),

    body('passOld')
    .custom((value, {req}) => {
        if(value != "") {

            let user = users.find(user => user.email === req.body.email && bcript.compareSync(value, user.pass))

            if(user) {
                return true
            } else {
                return false
            }
        }
        return true
    }).withMessage('La contraseña debe tener un minimo de 6 y un máximo de 12 caracteres.'),
]