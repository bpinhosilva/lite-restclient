'use strict';

let liteRestClient = require('lite-restclient');
let Request = liteRestClient.request;
let RestClient = liteRestClient.client;
let myRestClient = new RestClient();

let requestOptions = {
    qs: {
        q: 'nodejs'
    },
    url: 'http://www.google.com'
};

let request = new Request(requestOptions);

myRestClient.get(request.getPrototype())
    .then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
        console.error("error");
});