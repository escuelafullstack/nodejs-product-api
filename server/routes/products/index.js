const express = require('express')
const app = express()

// const { products } = require('../../controllers')
const products = require('../../controllers/products')
const { verifyToken } = require('../../middlewares')

app.get('/products', verifyToken, products.getProducts)
app.get('/product/:id', verifyToken, products.getProductById)
app.put('/product/:id', verifyToken, products.updateProduct)
app.post('/product', verifyToken, products.createProduct)
app.delete('/product/:id', verifyToken, products.deleteProduct)

module.exports = app