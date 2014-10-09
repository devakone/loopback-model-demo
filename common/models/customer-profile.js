var loopback = require('loopback'),
	CustomerProfileSchema = require('../schemas/customer-profile');

module.exports = function(CustomerProfile) {
	CustomerProfile = CustomerProfile.extend('CustomerProfile', CustomerProfileSchema);
};