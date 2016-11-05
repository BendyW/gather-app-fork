var express = require('express');
var indexCtrl = express.Router();
var Account = require('../models/accountModel');
var Event = require('../models/savedEventsModel');


indexCtrl.get('/', function(req, res, next){
    if(req.session.isLoggedIn === true){
      //  console.log(req.session);
        Account.where({user_name: req.session.user_name}).fetch()
            .then(function (cb) {
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
                // res.render('profile', cb.attributes);


                 var combine = {
                    user_name: cb.attributes.user_name,
                     first_name: cb.attributes.first_name,
                     email: cb.attributes.email
                 }


                Event.collection().fetch()
                    .then(function (cb) {
                        console.log(cb.models[0].attributes.id, ' this- --------------------')
                        var ArrayOfModels = cb.models;
                        res.render('profile', ArrayOfModels );
                    });

            });

    }else
    res.send("Session expired.");
});
indexCtrl.post('/logout', function (req,res,next) {
    req.session.isLoggedIn = false;
    req.session.id = '';
    // req.session = null;
    //console.log(req.session);
    res.redirect('/');
});
indexCtrl.post('/save', save);

function save(req,res,next){
    console.log(req.body)
    console.log(req.session)
    var model = new Event({
        id: req.body.id,
        name: req.body.eventName,
        user_name: req.session.user_name,
        location: req.body.location
    }).save().then(function(result) {
        //console.log(req.session);
        //console.log(result);
        res.redirect('/');
    });
}


indexCtrl.get('/foreignKey', function (req,res,next) {
    //WORK ON MANY TO MANY
     Account.where({id: req.session.userid}).fetch({withRelated: ['saved_events']})
     .then(function (cb) {
         console.log(req.body)
         res.json(cb);
     });
 });



module.exports = indexCtrl;