var loopback = require('loopback'),
    AppUserSchema = require('../schemas/app-user'),
    _ = require('lodash');




module.exports = function(AppUser) {
    //Extend the definition using my custom schema
    _.extend(AppUser.definition.rawProperties, AppUserSchema);
    AppUser.definition.build(true);

};
