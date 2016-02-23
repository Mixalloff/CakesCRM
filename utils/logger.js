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

}

module.exports = Logger;