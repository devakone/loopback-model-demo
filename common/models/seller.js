var loopback = require('loopback'),
	SellerSchema = require('../schemas/seller'),
	AppUser = loopback.getModel('AppUser');

module.exports = function(Seller) {

	Seller = AppUser.extend('Seller', SellerSchema);

	Seller.stats = function(filter) {

		return {
			text: "hello"
		}

	}

	Customer.remoteMethod('sellerDemo', {
		accepts: {
			arg: 'filter',
			type: 'object'
		},
		returns: {
			arg: 'demo',
			type: 'object'
		},
		http: {
			path: '/sellerDemo'
		}
	}, Customer.stats);


};