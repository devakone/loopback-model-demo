var loopback = require('loopback'),
    CustomerSchema = require('../schemas/customer'),
    AppUser = loopback.getModel('AppUser'),
    _ = require('lodash');



module.exports = function(Customer) {
    _.extend(Customer.definition.rawProperties, CustomerSchema);
    Customer.on('attached', function(app) {


        /*Customer.embedsOne('CustomerProfile', {
            as: 'profile'
        }); */

        console.log("Customer attached to data source")

    });


    Customer.setup = function() {
        Customer.base.setup.apply(this, arguments);

        this.remoteMethod('customerDemo', {
            description: 'Find nearby locations around the geo point',
            accepts: [{
                arg: 'here',
                type: 'GeoPoint',
                required: true,
                description: 'geo location (lng & lat)'
            }, {
                arg: 'page',
                type: 'Number',
                description: 'number of pages (page size=10)'
            }, {
                arg: 'max',
                type: 'Number',
                description: 'max distance in miles'
            }],
            returns: {
                arg: 'locations',
                root: true
            },
            http: {
                verb: 'GET'
            }
        });
    };

    Customer.setup();
    Customer.definition.build(true);

};
