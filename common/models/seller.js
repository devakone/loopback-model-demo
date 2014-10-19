var loopback = require('loopback'),
    = require('../schemas/seller'),
    AppUser = loopback.getModel('AppUser'),
    _ = require('lodash');

module.exports = function(Seller) {

    //Extend the definition using my custom schema
    _.extend(Seller.definition.rawProperties, SellerSchema);
    Seller.definition.build(true);
    Seller.stats = function(filter) {

        return {
            text: "hello"
        }

    }

    Seller.remoteMethod('sellerDemo', {
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
    }, Seller.stats);


};
