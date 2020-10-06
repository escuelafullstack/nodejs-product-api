const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ 
        success: true
    })
})

app.get('/getUsernames', (req, res) => {
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
})

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

app.listen('3000', () => {
    console.log('El servidor esta escuchando en el puerto 3000')
})