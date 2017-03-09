'use strict';

let debug = require('debug')('lite-restclient:util');

class Util {
    static hasProperty(obj, property) {
        let result = false;

        try {
            result = Object.prototype.hasOwnProperty.call(obj, property);
        }
        catch (err) {
            debug(err);
        }

        return result;
    }
}

module.exports = Util;