const express = require('express')
const app = express()
const path = require('path');
const port = 3030
const mehodOverride = require('method-override')
const session = require('express-session')

const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users')
const cookieParser = require('cookie-parser');
 
app.use(express.static('public'))

app.use(mehodOverride('_method'))
app.use(session({
    secret : 'mi secreto',
    saveUninitialized : true,
    resave : false
}))

app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)


app.listen(port, () => console.log('Server running in port '+ port))