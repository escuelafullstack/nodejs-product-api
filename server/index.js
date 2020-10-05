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

app.listen('3000', () => {
    console.log('El servidor esta escuchando en el puerto 3000')
})