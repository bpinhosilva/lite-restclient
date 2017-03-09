'use strict';

let debug = require('debug')('lite-restclient:response');

class Response {
    constructor(error, response, body) {
        this.error = error;

        if (error) {
            debug(error);
            this.response = {statusCode: 500};
        }
        else {
            this.response = response;

            if (this.response.statusCode !== 200) {
                this.error = {
                    status: this.response.statusCode,
                    message: this.response.statusMessage
                };
            }
        }

        this.body = body;
    }

    getBody() {
        return this.body;
    }

    isSuccess() {
        return (this.response && this.response.statusCode === 200);
    }
}

module.exports = Response;