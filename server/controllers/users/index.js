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

module.exports = {
    getUsernames,
    createUser
}