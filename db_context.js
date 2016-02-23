var camo = require("camo"),
    connect = camo.connect,
    config = require("./configs/common"),
    logger = require("./utils/logger");
      
// Подключение к БД
var connectToDB = function(callback){
    connect(config.db.connection).then(function(db){
        callback(db);
    });
}

exports.connectToDB = connectToDB;