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
    const newUser = req.body

    const createdUser = await User.create(newUser)

    res.status(200).json({
        success: true,
        data: createdUser
    })
}

const getUsers = async (req, res) => {
    
    const users = await User.find()

    res.status(200).json({
        success: true,
        data: users
    })
}

const getUserById = async (req, res) => {
    const { id } = req.params

    const user = await User.findById(id)

    res.status(200).json({
        success: true,
        data: user
    })
}

const updateUserById = async (req, res) => {
    const { id } = req.params

    const newUser = req.body

    const updatedUser = await User.findByIdAndUpdate(id, newUser, { new: true })

    res.status(200).json({
        success: true,
        data: updatedUser
    })
}

const deleteUserById = async (req, res) => {
    const { id } = req.params

    const user = await User.findByIdAndDelete(id)

    res.status(200).json({
        success: true,
        data: user,
        message: 'El usuario se eliminó correctamente'
    })

}

module.exports = {
    getUsernames,
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}