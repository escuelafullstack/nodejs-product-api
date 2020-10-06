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

module.exports = {
    getUsernames
}