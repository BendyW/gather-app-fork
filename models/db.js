'use strict'
require('dotenv').config(); 
var db = require('knex')({	
    client: process.env.DB_TYPE,
    connection: {
        host: process.env.DB_SERVER,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME
    }
});

var Bookshelf = require('bookshelf')(db);

Bookshelf.plugin('registry');


module.exports = Bookshelf;