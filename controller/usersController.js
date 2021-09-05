const { validationResult } = require("express-validator")

module.exports = {
    register: (req, res) => {
        return res.render('register')
    },
    processRegister: (req, res) => {
        let errors = validationResult(req)

        if(errors.isEmpty()) {
            const { name, email, pass } = req.body
        }
    },
    login: (req, res) => {
        return res.render('login')
    }
}