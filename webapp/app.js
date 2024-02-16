var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about', function (req, res) {
  res.send('About Page');
});

app.get('/contact', function (req, res) {
  res.send('Contact Page');
});

app.get('/portfolio', function (req, res) {
  res.send('Our portfolio showcases our recent projects.');
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry, can't find that!");
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});
