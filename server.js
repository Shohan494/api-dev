var express = require('express')
var app = express()

//root and representing hello world
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//listening/using the port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

