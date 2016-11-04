var Bookshelf = require('./db');
require('./savedEventsModel');

var Account = Bookshelf.Model.extend({
    tableName: 'user_accounts',
    saved_events: function(){
    return this.hasMany('SavedEvent');
        }
});
console.log('accounts model');
console.log('---------------');

module.exports = Bookshelf.model('Account', Account);