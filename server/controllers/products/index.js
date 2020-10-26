const Product = require('../../models/producto')

const getProducts = async (req, res) => {
    const products = await Product.find()
    
    res.status(200).json({
        success: true,
        data: products
    })
}

const getProductById = async (req, res) => {
    const { id } = req.params

    const product = await Product.findById(id).lean()

    res.status(200).json({
        success: true,
        data: product
    })
}

module.exports = {
    getProducts,
    getProductById
}