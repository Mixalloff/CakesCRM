var express = require('express');
var router  = express.Router();
var path    = require('path');
var Order = require('../models/order');
var Repository = require('../models/repository');


var repo = new Repository(Order);

router.get('/getall', (req, res) =>{
    console.log('Get all orders');
    //res.sendFile(path.resolve(__dirname + '/../logs.txt'));

   // repo.createEntity({name:"aaa", surname: "bbb", phone: "838322" });
    repo.findAll(function(result){
        result.map((item)=>{
            console.log(item.name);
        });
    });
});

module.exports = router;
