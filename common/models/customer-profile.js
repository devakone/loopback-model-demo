var loopback = require('loopback'),
    CustomerProfileSchema = require('../schemas/customer-profile'),
    _ = require('lodash');

module.exports = function(CustomerProfile) {
    //Extend the definition using my custom schema
    _.extend(CustomerProfile.definition.rawProperties, CustomerProfileSchema);
    CustomerProfile.definition.build(true);
};
