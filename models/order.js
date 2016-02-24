"use strict"

var Document = require('camo').Document;
var Client = require('./client');
var Delivery = require('./delivery');
var EntityParseError = require('../errors/entity_parse_error')

class Order extends Document {  
    constructor() {
        super();

        this.name = String; // Название заказа
        this.description = String; // Описание
        this.client = Client; // Клиент
        this.orderDate = { // День заказа
            type: Date,
            default: Date.now
        }
        this.orderDeadline = Date; // На какое число сделать заказ
        this.status = { // Статус заказа (canceled, done, discussed (обсуждается), agreed(договорились))
            type: String, 
            default: "discussed",
            choices: ["canceled", "done", "discussed", "agreed"]
        }
        this.nodes = String; // Заметки
        this.amount = Number; // Сумма
        this.primeCost = Number; // Себестоимость
        this.delivery = Delivery; // Доставка
    }

    static collectionName() {
        return 'orders';
    }
    
    // Парсит переданный объект к объекту Order
    static parse(entityJSON){
        return JSON.parse(entityJSON, function(key, value) {
            if (key == 'client')        return new Client(value);
            if (key == 'orderDate')     return new Date(value);
            if (key == 'orderDeadline') return new Date(value);
            if (key == 'amount')        return Number(value);
            if (key == 'primeCost')     return Number(value);
            if (key == 'delivery')      return new Delivery(value);
            return value;
        });
    }
}

module.exports = Order;