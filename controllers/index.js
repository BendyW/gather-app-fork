var express = require('express');
var indexCtrl = express.Router();

indexCtrl.get('/', function(req, res, next){
    res.render('index',{
        title: 'This is the index page',
        message: 'hello world'})
});

module.exports = indexCtrl;