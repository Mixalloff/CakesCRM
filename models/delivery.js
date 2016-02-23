"use strict"

var Document = require('camo').Document;
var Order = require('./order');

class Delivery extends Document {  
    constructor() {
        super();
        this.order = Order;
        this.address = String;
        this.amount = String;
        this.date = Date;
    }

    static collectionName() {
        return 'delivery';
    }
}

module.exports = Delivery;