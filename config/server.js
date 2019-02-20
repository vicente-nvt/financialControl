var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', 3000)

consign()
  .include('infra/routes')
  .into(app)

module.exports = app
