"use strict"

var Document = require('camo').Document;
var Order = require('./order');

// Класс доставки
class Delivery extends Document {  
    constructor() {
        super();
        this.order = Order; // Заказ для данной доставки
        this.address = String; // Адрес доставки
        this.amount = String; // Стоимость
        this.date = Date; // Дата (сделать интервал?)
    }

    static collectionName() {
        return 'delivery';
    }
}

module.exports = Delivery;