// var Client = require("./models/client");
// var Order = require("./models/order");
var util = require('util');
var Client = require("./models").Client;
var Order = require("./models").Order;
var Logger = require('./utils/logger');
var logger = new Logger();
var dbContext = require('./db_context');
var Server = require('./server');
var config = require('./configs/common');


dbContext.connectToDB(function(){
    logger.info("Database connected!");
});

var server = new Server(config.port, logger);
server.run();

