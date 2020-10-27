const express = require('express')
const app = express()

const { users } = require('../../controllers')

app.get('/getUsernames', users.getUsernames)

app.post('/user', users.createUser)

module.exports = app