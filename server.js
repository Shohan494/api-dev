var express = require('express')
var app = express()

//root and representing hello world
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/text', function (req, res) {
  res.send('random.text')
})

//This route path will match acd and abcd.
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

//This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})

//This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})

//This route path will match /abe and /abcde.
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})

//Examples of route paths based on regular expressions:
//This route path will match anything with an “a” in the route name.
/*
app.get(/a/, function (req, res) {
  res.send('/a/')
})
*/

//This route path will match butterfly and dragonfly,
//but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})

//To define routes with route parameters, 
//simply specify the route parameters in the path of the route as shown below.
app.get('/users/:userId/books/:bookId', function (req, res) {
  var data = req.params
  res.send(data)
})

//Since the hyphen (-) and the dot (.) are interpreted literally,
//they can be used along with route parameters for useful purposes.

//Route path: /plantae/:genus.:species
//Request URL: http://localhost:3000/plantae/Prunus.persica
app.get('/plantae/:genus.:species', function (req, res) {
  var data = req.params
  res.send(data)
})

//Route path: /flights/:from-:to
//Request URL: http://localhost:3000/flights/LAX-SFO
app.get('/flights/:from-:to', function (req, res) {
  var data = req.params
  res.send(data)
})


//listening/using the port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


