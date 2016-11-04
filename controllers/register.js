var express = require('express');
var regCtrl = express.Router();
var Account = require('../models/accountModel');
var bcrypt = require('bcryptjs');

/* GET users listing. */

regCtrl.get('/', function (req,res,next) {
    res.render('register', {})
});

regCtrl.post('/created', attemptToRegister);

function attemptToRegister(req,res,next){
    var password = req.body.password_hash;
    var hashedPassword = createPasswordHash(password);

    var model = new Account({
        id: req.body.id,
        user_name: req.body.user_name,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password_hash: hashedPassword
    }).save().then(function(result) {
        req.session.user_name = result.attributes.user_name;
        req.session.userid = result.attributes.id;
        req.session.isLoggedIn = true;
        console.log(req.session);
        console.log(result);
        res.redirect('/');
        // AccountModel.where({user_name: req.session.user}).fetch().then(
        //    function (result) {
        //        console.log(req.session)
        //        res.redirect('/');
        //    }
        // ).catch(function (error) {
        //     console.log(error);
        // });
    });
}

// add_username + last_name


function createPasswordHash (password) {
    var salt = 10; // salt factor of 10
    var hash = bcrypt.hashSync(password, salt);
    return hash;
};

module.exports = regCtrl;