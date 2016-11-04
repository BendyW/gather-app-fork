// Declaring our modules

var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(session({
    secret: 'This is my secret',
    resave: true,
    saveUninitialized: true
}));
// Adding rendering engine

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

// Require controllers

var indexCtrl = require('./controllers/index');
var regCtrl = require('./controllers/register');
var loginCtrl = require('./controllers/login');

// Mapping routes to necessary controllers

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', indexCtrl);
app.use('/register', regCtrl);
app.use('/login',loginCtrl);




module.exports = app;