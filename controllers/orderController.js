var express = require('express');
var router  = express.Router();
var path    = require('path');
var Order = require('../models/order');

router.get('/all', (req, res) =>{    
    Order.loadMany({}).then((result) =>{
        var orders = result.map((order) => { return order.toJSON() });
        res.JSONAnswer('all_orders', orders);
    });
});

module.exports = router;
