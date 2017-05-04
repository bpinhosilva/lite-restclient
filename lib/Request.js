'use strict';

let Util = require('./util');

class Request {
    constructor(obj) {
        let self = this;

        self.headers = {
            'Content-Type': 'application/json'
        };

        self.json = true;

        if (obj) {
            for (let prop in obj) {
                if (Util.hasProperty(obj, prop)) {
                    switch (prop) {
                        case 'url':
                            self.url = obj[prop];
                            break;
                        case 'body':
                            self.body = obj[prop];
                            break;
                        case 'form':
                            self.form = obj[prop];
                            break;
                        case 'formData':
                            self.formData = obj[prop];
                            break;
                        case 'qs':
                            self.qs = obj[prop];
                            break;
                        case 'json':
                            self.json = obj[prop];
                            break;
                        case 'headers':
                            self.headers = obj[prop];
                            break;
                    }
                }
            }
        }
    }

    addHeader(key, value) {
        this.headers[key] = value;
    }

    setUrl(url) {
        this.url = url;
    }

    getUrl() {
        return this.url;
    }

    setBody(body) {
        this.body = body;
    }

    getBody() {
        return this.body;
    }

    setForm(form) {
        this.form = form;
    }

    getForm() {
        return this.form;
    }

    setFormData(formData) {
        this.formData = formData;
    }

    getFormData() {
        return this.formData;
    }

    setQueryString(qs) {
        this.qs = qs;
    }

    getQueryString() {
        return this.qs;
    }

    setJSONMode(value) {
        this.json = value;
    }

    getPrototype() {
        let self = this;
        let data = {};

        for (let prop in self) {
            if (self.hasOwnProperty(prop))
                data[prop] = self[prop];
        }

        return data;
    }
}

module.exports = Request;