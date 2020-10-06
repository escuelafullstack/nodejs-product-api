const express = require('express')
const app = express()

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if(username == 'johanespino' && password == '123456789') {
        return res.status(200).json({
            success: true,
            message: 'El usuario ha iniciado sesion correctamente',
            name: 'Johan Espino'
        })
    }

    res.status(401).json({
        success: false,
        message: 'El usuario y/o contraseña son incorrectos'
    })
})

module.exports = app