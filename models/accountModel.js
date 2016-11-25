var Bookshelf = require('./db');
require('./savedEventsModel');

var Account = Bookshelf.Model.extend({
    tableName: 'user_accounts',
    idAttribute: "user_accounts_id",
    saved_events: function(){
    return this.hasMany('SavedEvent', 'user_accounts_id');
        }
});
console.log('accounts model');
console.log('---------------');

module.exports = Bookshelf.model('Account', Account);