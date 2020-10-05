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

app.get('/getUsername', (req, res) => {
    const username = req.body.username
    // res.send({ 
    //     success: true,
    //     username: username
    // })
    res.send(`<h1>${username}</h1>`)
})

app.listen('3000', () => {
    console.log('El servidor esta escuchando en el puerto 3000')
})