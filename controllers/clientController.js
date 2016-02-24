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

router.post('/create', (req, res) => {
    var entity = req.body;
    Client.create(entity).save().then(() =>{
        res.JSONAnswer('client_create', "Client is added");
    }).catch((e)=>{
        next();
    });
});

module.exports = router;