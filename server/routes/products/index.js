const express = require('express')
const app = express()

// const { products } = require('../../controllers')
const products = require('../../controllers/products')
const { verifyToken, verifyRole } = require('../../middlewares')

app.get('/products', verifyToken, products.getProducts)
app.get('/product/:id', verifyToken, products.getProductById)
app.put('/product/:id', [verifyToken, verifyRole] , products.updateProduct)
app.post('/product', [verifyToken, verifyRole], products.createProduct)
app.delete('/product/:id', [verifyToken, verifyRole], products.deleteProduct)

module.exports = app