const User = require("../../models/user")

const getUsernames = (req, res) => {
    const users = [
        {
            username: 'johanespino',
            firstName: 'Johan',
            lastName: 'Espino'
        },
        {
            username: 'juanespino',
            firstName: 'Juan',
            lastName: 'Espino'
        },
        {
            username: 'joseespino',
            firstName: 'Jose',
            lastName: 'Espino'
        },
    ]
    res.json({
        users
    })
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body

        const createdUser = await User.create(newUser)

        res.status(201).json({
            success: true,
            data: createdUser,
            message: createdUser ? 'El usuario se ha creado correctamente' : 'No se pudo crear el usuario'
        })
    } catch (error) {
        console.log('ERROR: ', error)    
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find()

        res.status(200).json({
            success: true,
            data: users,
            message: users ? 'Los usuarios se han obtenido correctamente' : 'No se pudieron obtener los usuarios'
        })

    } catch (error) {
        console.log('ERROR: ', error)
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params

        const user = await User.findById(id)
    
        res.status(200).json({
            success: true,
            data: user, 
            message: user ? 'El usuario se ha obtenido correctamente' : 'No se pudo obtener el usuario solicitado'
        }) 
    } catch (error) {
        console.log('ERROR: ', error)
    }
}

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params

        const newUser = req.body

        const updatedUser = await User.findByIdAndUpdate(id, newUser, { new: true })

        res.status(200).json({
            success: true,
            data: updatedUser,
            message: updatedUser ? 'El usuario se actualizo correctamente' : 'El usuario no pude ser actualizado'
        })

    } catch (error) {
        console.log('ERROR: ', error)
    }
}

const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params

        const user = await User.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            data: user,
            message: user ? 'El usuario se eliminó correctamente' : 'El usuario no pudo ser eliminado'
        })
    } catch(error) {
        console.log('ERROR: ', error)
    }
}

module.exports = {
    getUsernames,
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}