var express = require('express');
var indexCtrl = express.Router();
var Account = require('../models/AccountModel');

indexCtrl.get('/', function(req, res, next){
    if(req.session.isLoggedIn === true){
        Account.where({user_name: req.session.user_name}).fetch()
            .then(function (cb) {
                var test = req.session.user
                res.render('index', req.session);
            });
    }else
        res.render("index",{});
});

indexCtrl.get('/profile', function (req,res,next) {
    console.log(req.session);
    if(req.session.isLoggedIn === true){
        Account.where({user_name: req.session.user_name}).fetch()
            .then(function (cb) {
                console.log(cb.attributes);
                res.render('profile', cb.attributes);
            });
    }else
    res.send("Hi buddy");
})
indexCtrl.post('/logout', function (req,res,next) {
    req.session.isLoggedIn = false;
    req.session.user_name = '';
    console.log(req.session);
    res.redirect('/')
})
indexCtrl.get('/foreignKey', function (req,res,next) {
     Account.where({id:1}).fetch({withRelated: ['foreignkeyVar']})
     .then(function (cb) {
         res.json(cb.related('saved_events'));
     });
 })



module.exports = indexCtrl;