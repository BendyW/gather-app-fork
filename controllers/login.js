var express = require('express');
var loginCtrl = express.Router();
var Account = require('../models/accountModel');
var bcrypt = require('bcryptjs');


loginCtrl.get('/', function (req,res,next) {
    res.render('login');
})
loginCtrl.post('/logged', attemptToLogin);

function attemptToLogin(req,res,next){
    var password = req.body.password;
   // console.log(req.body)
    Account.where('user_name', req.body.user_name).fetch().then(
        function(result) {
            var attempt = comparePasswordHashes(req.body.password, result.attributes.password_hash);
            if(attempt === true) {
     //           console.log(req.session);
                req.session.user_name = result.attributes.user_name;
                req.session.userid = result.attributes.id;
                req.session.isLoggedIn = true;
                console.log(req.session);
                res.redirect('/');
            }
            else{
                res.render('loginFailed', {});
            }
        });
}

function comparePasswordHashes (input, db) {
    //input: user's attempted to login
    var hash = createPasswordHash(input);
    return bcrypt.compareSync(input, db);
};
function createPasswordHash (password) {
    var salt = 10; // salt factor of 10
    var hash = bcrypt.hashSync(password, salt);
    return hash;
};

module.exports = loginCtrl;