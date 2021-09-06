module.exports = (req, res, nex) => {
    if(req.session.userLogin) {
        res.locals.userLogin = req.session.userLogin
    }
    next()
}