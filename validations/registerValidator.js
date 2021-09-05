const { check, body } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio.'),

    check('email')
    .isEmail().withMessage('Debe ingresar un email valido.'),

    check('pass')
    .isLength({
        max : 12,
        min : 6
    }).withMessage('La contraseña debe tener un minimo de 6 y un maximo de 12.'),

    body('pass2')
    .custom((value, {req}) => {
        if(value !== req.body.pass) {
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide.'),

    check('terms')
    .isString('on').withMessage('Debes aceptar los términos y condiciones.')
]