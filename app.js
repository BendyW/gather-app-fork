var express = require('express'),
    app     = express(),
    fs      = require('fs'),
    path    = require('path'),
    port    = 5001;


app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/views'));

app.get('/', function(req, res, next){
    res.render('index', {title : "Home"});
});

app.get('/results', function(req, res, next){
    res.render('results', {title : "Results"});
});

app.listen(process.env.PORT || port);
