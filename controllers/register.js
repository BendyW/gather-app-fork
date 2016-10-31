var express = require('express');
var regCtrl = express.Router();
var AccountModel = require('../models/accountModel');
var bcrypt = require('bcryptjs');

/* GET users listing. */

regCtrl.get('/', function (req,res,next) {
    res.render('register', {})
});

regCtrl.get('/login', function (req,res,next) {
    res.render('login');
})
regCtrl.post('/logged', attemptToLogin);
regCtrl.post('/create', attemptToRegister);

function attemptToRegister(req,res,next){
    var password = req.body.password_hash;
    console.log(password);
    var hashedPassword = createPasswordHash(password);
    var model = new AccountModel({
        email: req.body.email,
        name: req.body.name,
        password_hash: hashedPassword,
        location: req.body.location
    }).save().then(function(result) {
        //res.redirect('/')
        res.json(result);
    });
}

// add_username + last_name

function attemptToLogin(req,res,next){
    var password = req.body.password;
    AccountModel.where('email', req.body.email).fetch().then(
        function(result) {
            console.log(req.body.password);
            var attempt = comparePasswordHashes(req.body.password, result.attributes.password_hash);
            // then we share the results
            if(attempt === true) {
                res.render('index', {})
            }
            else{
                res.render('loginFailed', {});
            }
        });
}
function createPasswordHash (password) {
    var salt = 10; // salt factor of 10
    var hash = bcrypt.hashSync(password, salt);
    return hash;
};
function comparePasswordHashes (input, db) {
    //input: user's attempted to login
    var hash = createPasswordHash(input);
    return bcrypt.compareSync(input, db);
};

module.exports = regCtrl;