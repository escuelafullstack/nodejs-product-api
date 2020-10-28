const express = require('express')
const app = express()

const { users } = require('../../controllers')
const { verifyToken, verifyRole } = require('../../middlewares')

app.get('/getUsernames', users.getUsernames)

app.get('/users', verifyToken, users.getUsers)
app.get('/user/:id', verifyToken, users.getUserById)
// ADMIN
app.post('/user', [verifyToken,verifyRole], users.createUser)
app.put('/user/:id', [verifyToken, verifyRole], users.updateUserById)
app.delete('/user/:id', [verifyToken, verifyRole] ,users.deleteUserById)

module.exports = app