'use strict';

class EntityParseError extends Error {
    constructor(code, message, type) {
        super();
        this.type    = type    || 'error';
        this.message = message || 'Bad Request';
        this.code    = code    || 400;
    }

    toClient() {
        return JSON.stringify({
            'type': this.type,
            'data': this.message
        });
    }
}

module.exports = EntityParseError;