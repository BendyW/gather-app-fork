var express = require('express');
var regCtrl = express.Router();
var AccountModel = require('../models/AccountModel');
var bcrypt = require('bcryptjs');

/* GET users listing. */

regCtrl.get('/', function (req,res,next) {
    res.render('register', {})
});

regCtrl.post('/created', attemptToRegister);

function attemptToRegister(req,res,next){
    console.log(req.body);
    var password = req.body.password_hash;
    var hashedPassword = createPasswordHash(password);
    var model = new AccountModel({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password_hash: hashedPassword
    }).save().then(function(result) {
        //res.redirect('/')
        res.json(result);
    });
}

// add_username + last_name


function createPasswordHash (password) {
    var salt = 10; // salt factor of 10
    var hash = bcrypt.hashSync(password, salt);
    return hash;
};

module.exports = regCtrl;