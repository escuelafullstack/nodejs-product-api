const express = require('express')
const app = express()

// const { products } = require('../../controllers')
const products = require('../../controllers/products')

app.get('/products', products.getProducts)
app.get('/product/:id', products.getProductById)
app.put('/product/:id', products.updateProduct)
app.post('/product', products.createProduct)
app.delete('/product/:id', products.deleteProduct)

module.exports = app