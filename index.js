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

var Repository = require('./models/repository');


dbContext.connectToDB(function(){
    logger.info("Database connected!");
    
    // ---------------- Test repository -----------------//
    new Repository(Client).findEntity({name:"aaa"}, (result)=>{
        addOrder(result);
    });
   // repo.createEntity({name:"aaa", surname: "bbb", phone: "838322" });
   
   function addOrder(client){
        var repo = new Repository(Order);
        repo.createEntity({
            name : "order1", // Название заказа
            description : "2 cakes", // Описание
            client : client, // Клиент
            orderDate : new Date(), // День заказа
            orderDeadline : new Date(2016, 3, 14), // На какое число сделать заказ
            status : "discussed", // Статус заказа
            nodes : "", // Заметки
            amount : 3000 // Сумма
        });
        repo.findAll(function(result){
            result.map((item)=>{
                console.log(util.inspect(item));
            });
        });
   }
   // ---------------- Test repository -----------------//
});

var server = new Server(config.port, logger);
server.run();

