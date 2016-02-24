'use strict';

var fs = require('fs');
var util = require('util');

class Logger{
    constructor(){
        this.logFile = __dirname + '/../logs.txt';
    }
    
    getTime() {
        return new Date().toTimeString().split(' ')[0]
    }
    
     printMessage(message) {
        var msg = util.format("%s -- %s", this.getTime(), message);
        fs.appendFile(this.logFile, msg + '\n', (err) => {
            if (err) throw err;
        });
        console.log(msg);
    }
    
     clearLog() {
        fs.writeFile(this.logFile, '', (err) => {
            if (err) throw err;
            console.log(util.format("%s -- %s", this.getTime(), "Logs cleared"));
        });
    }
    
    info(message) {
        message = util.format('(INFO) %s', message);
        this.printMessage(message);
    }

    warn(message) {
         message = util.format('(WARN) %s', message);
        this.printMessage(message);
    }
    
    _isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }

    _inspect(obj) {
        var result = "{"
        for (var key in obj) {
            if (this._isObject(obj[key])) {
                result += key + ': ' + this._inspect(obj[key]);
            } else if (obj[key] instanceof Array) {
                result += key + ': [';
                obj[key].forEach((element) => {
                    result += this._inspect(element) + ', ';
                });
                result += '] ';
            } else {
                result += key + ': ' + obj[key] +'; ';
            }
        }
        result += '}';
        return result;
    }

    inspect(msg, obj) {
        this.info(msg + ' ' + this._inspect(obj));
    }

}

module.exports = Logger;