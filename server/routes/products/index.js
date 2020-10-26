const express = require('express')
const app = express()

// const { products } = require('../../controllers')
const products = require('../../controllers/products')

app.get('/getProducts', products.getProducts)
app.get('/getProductById/:id', products.getProductById)

module.exports = app