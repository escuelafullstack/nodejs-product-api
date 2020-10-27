const express = require('express')
const app = express()

const { users } = require('../../controllers')

app.get('/getUsernames', users.getUsernames)

app.post('/user', users.createUser)
app.get('/users', users.getUsers)
app.get('/user/:id', users.getUserById)
app.put('/user/:id', users.updateUserById)
app.delete('/user/:id', users.deleteUserById)

module.exports = app