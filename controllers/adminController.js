var express = require('express');
var router  = express.Router();
var path    = require('path');

router.get('/logs', (req, res) =>{
    console.log('Admin logs');
    res.sendFile(path.resolve(__dirname + '/../logs.txt'));
});

module.exports = router;
