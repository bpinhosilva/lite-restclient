'use strict';

let Bluebird = require('bluebird');
let Response = require('./Response');

class RestClient {
    constructor() {
        this.client = require('request');
    }

    post(request) {
        let self = this;

        return new Bluebird((resolve, reject) => {
            self.client.post(request, (error, resp, body) => {
                let response = new Response(error, resp, body);

                if (response.isSuccess())
                    resolve(response);
                else
                    reject(response);
            });
        });
    }

    get(request) {
        let self = this;

        return new Bluebird((resolve, reject) => {
            self.client.get(request, (error, resp, body) => {
                let response = new Response(error, resp, body);

                if (response.isSuccess())
                    resolve(response);
                else
                    reject(response);
            });
        });
    }

    getClient() {
        return this.client;
    }
}

module.exports = RestClient;