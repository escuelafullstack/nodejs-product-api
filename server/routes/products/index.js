const express = require('express')
const app = express()

// const { products } = require('../../controllers')
const products = require('../../controllers/products')

app.get('/getProducts', products.getProducts)

module.exports = app