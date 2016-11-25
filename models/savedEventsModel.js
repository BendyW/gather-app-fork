var Bookshelf = require('./db');
require('./accountModel');

var SavedEvent= Bookshelf.Model.extend({
    tableName: 'saved_events',
    idAttribute: "saved_events_id",
    account: function(){
    return this.belongsTo('Account', 'user_accounts_id');
    }
});
console.log('saved events model GO')

module.exports = Bookshelf.model('SavedEvent', SavedEvent);