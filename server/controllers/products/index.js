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

const updateProduct = async (req, res) => {
    const { id } = req.params
    const newProduct = req.body

    const updatedProduct = await Product.findByIdAndUpdate(id, newProduct, { new: true })

    res.status(200).json({
        success: true, 
        data: updatedProduct
    })
}

module.exports = {
    getProducts,
    getProductById,
    updateProduct
}