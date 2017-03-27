var express = require('express')
params = require('express-params')
var app = express()

params.extend(app);

//root and representing hello world
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.param('unix', /^[0-9]+$/);
//1490549887

app.get('/:unix', function(req, res) {
  var unix = req.params.unix
  var d = new Date(unix * 1000), // Convert the passed timestamp to milliseconds
    yyyy = d.getFullYear(),
    mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
    dd = ('0' + d.getDate()).slice(-2),     // Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ('0' + d.getMinutes()).slice(-2),   // Add leading 0.
    ampm = 'AM',
    time;
      
  if (hh > 12) {
    h = hh - 12;
    ampm = 'PM';
  } else if (hh === 12) {
    h = 12;
    ampm = 'PM';
  } else if (hh == 0) {
    h = 12;
  }
  // ie: 2013-02-18, 8:35 AM  
  time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

  //the respone of the express app
  res.send('{ unix: ' + req.params.unix + ',' + " " + 'natural: ' + time + ' }');
});

/*
app.get('/:unix/:natural', function(req, res) {
var natural = req.params.natural
if(natural == "")
{
  res.send('{ unix: ' + req.params.unix + ',' + " " + 'natural: ' + req.params.natural + ' }');
} else 
res.send('{ unix: ' + req.params.unix + ',' + " " + 'natural: ' + req.params.natural + ' }');

});
*/
app.param('natural', /^\d{1,2}[./-]\d{1,2}[./-]\d{4}$/);
app.get('/:natural', function(req, res) {
  var s = req.params.natural
  //the respone of the express app
  var d = new Date(s)
  var u = d.getTime();
  res.send('{ unix: ' + u + ',' + ' ' + 'natuaral: ' + d + ' }' )
});


//listening/using the port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/*
if(day==0){ day="Sunday"; }
if(day==1){ day="Monday"; }
if(day==2){ day="Tuesday";
if(day==3){ day="Wednesday"; }
if(day==4){ day="Thursday"; }
if(day==5){ day="Friday"; }
if(day==6){ day="Saturday"; }
*/


