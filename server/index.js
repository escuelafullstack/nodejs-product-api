const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(require('./routes'))

app.get('/', (req, res) => {
    res.send({ 
        success: true
    })
})

app.listen('3000', () => {
    console.log('El servidor esta escuchando en el puerto 3000')
})