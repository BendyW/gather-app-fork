// Declaring our modules

var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 3222;

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
var mapResultCtrl = require('./controllers/mapResult');
var regCtrl = require('./controllers/register');
var loginCtrl = require('./controllers/login');

// Mapping routes to necessary controllers

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', indexCtrl);
app.use('/result', mapResultCtrl);
app.use('/register', regCtrl);
app.use('/login',loginCtrl);


app.listen(process.env.PORT || port);

module.exports = app;