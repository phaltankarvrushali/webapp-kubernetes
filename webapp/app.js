// var express = require('express');

// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });


var express = require('express');
var app = express();

app.use(function (req, res, next) {
  console.log('Request received:', req.method, req.url);
  next();
});

app.get('/', function (req, res) {
  res.send('Hi there, I am Vrushali Phaltankar');
});

app.get('/about', function (req, res) {
  res.send('About Page');
});

app.get('/contact', function (req, res) {
  res.send('Contact Page');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry, can't find that!");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
