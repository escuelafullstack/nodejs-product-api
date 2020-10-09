const Product = require('../../models/producto')

const getProducts = async (req, res) => {
    const products = await Product.find()
    
    res.status(200).json({
        success: true,
        data: products
    })
}

module.exports = {
    getProducts
}