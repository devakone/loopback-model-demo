var loopback = require('loopback'),
    CustomerSchema = require('../schemas/customer'),
    AppUser = loopback.getModel('AppUser');

module.exports = function(Customer) {
    Customer = AppUser.extend('Customer', CustomerSchema);


    Customer.stats = function(filter) {

        return {
            text: "hello"
        }

    }

    Customer.remoteMethod('customerDemo', {
        accepts: {
            arg: 'filter',
            type: 'object'
        },
        returns: {
            arg: 'demo',
            type: 'object'
        },
        http: {
            path: '/customerDemo'
        }
    }, Customer.stats);

};