var express = require('express')
var app = express()

//root and representing hello world
app.get('/', function (req, res) {
  res.send('Hello World! Try some example/a/b/c')
})

//A single callback function can handle a route. For example:
app.get('/example/a', function (req, res) {
  res.send('Hello from A!')
})

//More than one callback function can handle a route 
//(make sure you specify the next object). For example:
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

//An array of callback functions can handle a route. For example:
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

//A combination of independent functions and arrays of 
//functions can handle a route. For example:
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
