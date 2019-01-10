const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const index = require('./app/index')
const expenses = require('./app/expenses/routes')


const app = express()

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'))
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use((req, res, next) => {
  if (req.query.delay) return setTimeout(next, parseInt(req.query.delay, 10))
  next()
})

app.use('/api', expenses)

app.get('/', (req, res, next) => res.redirect('/api'))

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  
  res.status(err.status || 500)

  if (err.status !== 404 && process.env.NODE_ENV === 'test') {
    console.log(err)
  }
  res.json({
    error: err.toString(),
    stack: err.stack.split("\n").slice(1).map(line => line.trim()),
  })
})

module.exports = app
