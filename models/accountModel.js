var Bookshelf = require('./db');
// require foreign key table from model require('./model');

var AccountModel = Bookshelf.Model.extend({
    tableName: 'user_accounts'
    //,saved_events: function(){
    //return this.belongsTo('modelVar');}
});
console.log('accounts model')

module.exports = Bookshelf.model('AccountModel', AccountModel);