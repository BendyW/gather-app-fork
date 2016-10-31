'use strict'
require('dotenv').config(); //# dot-env
var db = require('knex')({	//# knex
    client: process.env.DB_TYPE,
    connection: {
        host: process.env.DB_SERVER,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME
    }
});

module.exports = db;