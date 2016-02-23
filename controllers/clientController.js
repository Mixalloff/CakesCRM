var express = require('express');
var router  = express.Router();
var path    = require('path');
var Client = require('../models/client');

router.get('/all', (req, res) =>{    
    Client.loadMany({}).then((result) =>{
        var orders = result.map((order) => { return order.toJSON() });
        res.JSONAnswer('all_clients', orders);
    });
});

module.exports = router;