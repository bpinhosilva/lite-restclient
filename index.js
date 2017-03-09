'use strict';

var RestClient = require('./lib/RestClient');
var Response   = require('./lib/Response');
var Request    = require('./lib/Request');

module.exports = {
    client   : RestClient,
    response : Response,
    request  : Request
};