const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    try {
        const token = req.get('Authorization')

        jwt.verify(token, 'seed-product-api', (err, decoded) => {
            if(err) {
                return res.status(401).json({
                    ok: false,
                    err,
                    message: 'Token no valido'
                })
            }
    
            req.usuario = decoded.usuario
            next()
        })
    }
    catch(error) {

    console.log("ERROR: ", error)
    }
}

module.exports = {
    verifyToken
}