var loopback = require('loopback'),
	AppUserSchema = require('../schemas/app-user');




module.exports = function(AppUser) {
	AppUser = loopback.User.extend('AppUser', AppUserSchema);


};