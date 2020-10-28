const express = require('express')
const app = express()

const { users } = require('../../controllers')
const { verifyToken } = require('../../middlewares')

app.get('/getUsernames', users.getUsernames)

app.post('/user', verifyToken, users.createUser)
app.get('/users', verifyToken, users.getUsers)
app.get('/user/:id', verifyToken, users.getUserById)
app.put('/user/:id', verifyToken,users.updateUserById)
app.delete('/user/:id', verifyToken,users.deleteUserById)

module.exports = app