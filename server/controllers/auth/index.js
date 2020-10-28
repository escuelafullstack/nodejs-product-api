const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../../models/user')


const login = async (req, res) => {
    const user = req.body

    const loggedUser = await User.findOne({ email: user.email })

    if(loggedUser) {
        // TODO: La contraseña sea igual a la de la BD
        // TODO: Crear y Enviar TOKEN
        if (bcrypt.compareSync(user.password, loggedUser.password)) {

            const token = jwt.sign({
                usuario: loggedUser
            }, 'seed-product-api', { expiresIn: 60 * 60 * 24 * 30 })

            res.json({
                success: true,
                data: loggedUser,
                token,
                message: 'El usuario ha iniciado sesion correctamente'
            })
        } else {
            res.status(400).json({
                success: false,
                data: null,
                message: 'El correo y/o la contraseña son incorrectas'
            })
        }
        
    } else {
        // TODO: El correo o la contraseña es incorrecta
        res.status(400).json({
            success: false,
            data: null,
            message: 'El correo y/o la contraseña son incorrectas'
        })
    }
}


// const login = (req, res) => {
//     const username = req.body.username
//     const password = req.body.password

//     if(username == 'johanespino' && password == '123456789') {
//         return res.status(200).json({
//             success: true,
//             message: 'El usuario ha iniciado sesion correctamente',
//             name: 'Johan Espino'
//         })
//     }

//     res.status(401).json({
//         success: false,
//         message: 'El usuario y/o contraseña son incorrectos'
//     })
// }

module.exports = {
    login
}