const express = require('express')
const app = express()
// importar las rutas 
app.use(require('./auth'))
app.use(require('./users'))
app.use(require('./products'))

module.exports = app