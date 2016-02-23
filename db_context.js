var camo = require("camo"),
    connect = camo.connect,
    async = require("async"),
    config = require("./configs/common"),
    logger = require("./utils/logger");
      
// Подключение к БД
var database;
var connectToDB = function(callback){
    connect(config.db.connection).then(function(db){
        database = db;
        callback();
    });
}

// Экспорт БД
exports.database = database;
exports.connectToDB = connectToDB;