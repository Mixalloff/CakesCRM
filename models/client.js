"use strict"

var Document = require('camo').Document;

class Client extends Document {  
    constructor() {
        super();

        this.name = String;
        this.surname = String;
        this.phone = String;
        this.socialNet = String;
        this.nodes = String; // Заметки
    }

    static collectionName() {
        return 'clients';
    }
}

module.exports = Client;