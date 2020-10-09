const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

try {
    mongoose.connect("mongodb+srv://johanespino:adminadmin@cluster0.sq5r0.mongodb.net/product-api?retryWrites=true&w=majority")    
} catch(error) {
    console.log('ERROR: ', error)
}

app.use(require('./routes'))

app.get('/', (req, res) => {
    res.send({ 
        success: true
    })
})

app.listen('3000', () => {
    console.log('El servidor esta escuchando en el puerto 3000')
})