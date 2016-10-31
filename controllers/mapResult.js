var express = require('express');
var mapResultCtrl = express.Router();

mapResultCtrl.post('/', function(req, res, next){
    res.render('maps', {});
});

module.exports = mapResultCtrl;