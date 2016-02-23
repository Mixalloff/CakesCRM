'use strict';

var express = require("express"),
    app     = express(),
    http    = require("http"),
    config  = require("./configs/common.json"),
    Logger = require('./utils/logger'),
   // logger  = new Logger(),
    BodyParser = require('body-parser'),
    Controllers = require('./controllers');
    
class Server {
    constructor(port, logger){
        this.port = port;
        this.logger = logger;
        this.app = app;
    }
    
    initExpress(){
        app.use(express.static('./public'));
        app.use(BodyParser.urlencoded({extended: true}));
        
        app.use((req, res, next) => {
            req.logger = this.logger;
            req.logger.info(req.method + ' ' + req.url);
            res.header('Access-Control-Allow-Origin', '*');
            res.set({'content-type': 'application/json; charset=utf-8' })
            res.JSONAnswer = function (type, data, code) {
                var answer = JSON.stringify({
                    'type': type,
                    'data': data
                });
                req.logger.info('Отправляю JSON клиенту: ' +answer);
                res.status(code || 200).end(answer);
            };

            if (req.method === 'POST') {
                this.logger.inspect('Параметры запроса:', req.body);
            }

            next();
        });
        
        app.use('/admin', Controllers.Admin);
        
        app.use((req, res)=>{
            res.send(404, "Page not found");
        });
    }
    
    run(){
        this.initExpress();
        app.listen(this.port);
        this.logger.info('Сервер запущен на порте ' + this.port);
    }
}

module.exports = Server;

