var express = require('express');
var router  = express.Router();
var path    = require('path');
var Models = require('../models');
var Order = Models.Order;
var Client = Models.Client;
var Delivery = Models.Delivery;
var ServerError = require('../errors/server_error');

router.get('/all', (req, res) =>{    
    Order.loadMany({}).then((result) =>{
        var orders = result.map((order) => { return order.toJSON() });
        res.JSONAnswer('all_orders', orders);
    });
});

router.post('/create', (req, res) => {
    // Валидация
    var requestString = JSON.stringify(req.body);
    var entity = Order.parse(requestString);
    Order.create(entity).save().then(() =>{
        res.JSONAnswer('order_create', "Order is added");
    }).catch((e)=>{
        next();
    });
});

module.exports = router;
