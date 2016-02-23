"use strict"

var Document = require('camo').Document;
var Client = require('./client');
var Delivery = require('./delivery');

class Order extends Document {  
    constructor() {
        super();

        this.name = String; // Название заказа
        this.description = String; // Описание
        this.client = Client; // Клиент
        this.orderDate = Date; // День заказа
        this.orderDeadline = Date; // На какое число сделать заказ
        this.status = String; // Статус заказа (canceled, done, discussed (обсуждается), agreed(договорились))
        this.nodes = String; // Заметки
        this.amount = Number; // Сумма
        this.primeCost = Number; // Себестоимость
        this.delivery = Delivery; // Доставка
    }

    static collectionName() {
        return 'orders';
    }
}

module.exports = Order;