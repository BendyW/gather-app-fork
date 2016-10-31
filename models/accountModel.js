var db = require('./db');
var bookshelf = require('bookshelf')(db);

var accountModel = bookshelf.Model.extend({
    tableName: 'user_accounts'
});
console.log('accounts model')

module.exports = accountModel;