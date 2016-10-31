// Declaring our modules

var express = require('express');
var path = require('path');
var app = express();
var port = 4000;

// Adding rendering engine

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

// Require controllers

var indexCtrl = require('./controllers/index');
var mapResultCtrl = require('./controllers/mapResult');
var regCtrl = require('./controllers/register');

// Mapping routes to necessary controllers

app.use('/', indexCtrl);
app.use('/result', mapResultCtrl);
app.use('/register', regCtrl);

// Listen for port

app.listen(port, function(req, res, next){
    console.log('Port is working on ' + port);
})