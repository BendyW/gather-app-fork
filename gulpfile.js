'use strict';
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var db = require('./models/db');
console.log(db.knex)
gulp.task('create_gather_db', function () {
    function cb(res) {
        console.log(res);
    }
    db.raw(sql).then(cb);
});
gulp.task('delete_gather_db', function () {
    var sql = 'drop database gather'
    function cb(res) {
        console.log(res);
    }
    db.knex.raw(sql).then(cb);
})
gulp.task('db_create_user_accounts_table', function() {
    var sqlString = 'create table user_accounts(' +
        'id int not null auto_increment,' +
        'user_name varchar(20) not null unique,' +
        'first_name varchar(20) not null,'+
        'last_name varchar(30) not null,' +
        'email varchar(255) not null unique,' +
        'password_hash varchar(255) not null,' +
        'primary key (id)' +
        ');';
    function cb(res) {
        console.log(res);
    }
    db.knex.raw(sqlString).then(cb);
});
gulp.task('db_remove_user_accounts_table', function () {
    var sqlString = 'drop table user_accounts;';
    function cb(res) {
        console.log(res);
    }
    db.knex.raw(sqlString).then(cb);
});
gulp.task('db_create_saved_events_table', function() {
    var sqlString = 'create table saved_events(' +
        'id int not null auto_increment,' +
        'name varchar(100) not null,'+
        'user_name varchar(255) not null,' +
        'location varchar(65),'+
        'primary key (id)' +
        ');';
    function cb(res) {
        console.log(res);
    }
    db.knex.raw(sqlString).then(cb);
});
gulp.task('db_remove_saved_events_table', function () {
    var sqlString = 'drop table saved_events;';
    function cb(res) {
        console.log(res);
    }
    db.knex.raw(sqlString).then(cb);
});

gulp.task('Nodemon', restartServer);
function restartServer() {
    nodemon({
        script: './bin/www',
        ext: 'js hbs scss sql'
    });
}
gulp.task('default', ['Nodemon']);
