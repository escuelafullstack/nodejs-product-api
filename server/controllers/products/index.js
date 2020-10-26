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

const createProduct = async (req, res) => {
    const newProduct = req.body

    const createdProduct = await Product.create(newProduct)

    res.status(200).json({
        success: true,
        data: createdProduct
    })
}

const deleteProduct = async (req, res) => {
    const { id } = req.params

    const deletedProduct = await Product.findByIdAndDelete(id)

    res.status(200).json({
        success: true,
        data: deletedProduct
    })
}

module.exports = {
    getProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
}