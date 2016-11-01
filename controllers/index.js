var express = require('express');
var indexCtrl = express.Router();
var AccountModel = require('../models/AccountModel');

indexCtrl.get('/', function(req, res, next){
    res.render('index',{
        title: 'This is the index page',
        message: 'hello world'})
});

// indexCtrl.get('/foreignKey', function (req,res,next) {
//     AccountModel.where({id:1}).fetch({withRelated: ['foreignkeyVar']})
//     .then(function (cb) {
//         res.json(cb.related('saved_events'));
//     });
// })

module.exports = indexCtrl;