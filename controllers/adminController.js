var express = require('express');
var router  = express.Router();
var path    = require('path');

router.get('/logs', (req, res) =>{
    req.logger.info("Admin logs requested");
    res.sendFile(path.resolve(__dirname + '/../logs.txt'));
});

router.get('/clearlogs', (req, res) =>{
    req.logger.clearLog();
    res.JSONAnswer('clear_logs', "Logs are cleared!");
});

module.exports = router;
