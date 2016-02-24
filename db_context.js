var camo = require("camo"),
    connect = camo.connect,
    config = require("./configs/common"),
    logger = require("./utils/logger");
      
// Подключение к БД
var connectToDB = function(){
    return connect(config.db.connection);
}

exports.connectToDB = connectToDB;