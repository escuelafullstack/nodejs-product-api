const express = require('express')
const app = express()

const { users } = require('../../controllers')

app.get('/getUsernames', users.getUsernames)

module.exports = app