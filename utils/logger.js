'use strict';

var fs = require('fs');

class Logger{
    constructor(){
        this.logFile = __dirname + '/../logs.txt';
    }
    
    getTime() {
        return new Date().toTimeString().split(' ')[0]
    }
    
     printMessage(message) {
        var msg = this.getTime() + ' -- ' + message;
        fs.appendFile(this.logFile, msg + '\n', (err) => {
            if (err) throw err;
        });
        console.log(msg);
    }
    
     clearLog() {
        fs.writeFile(this.logFile, '', (err) => {
            if (err) throw err;
        });
    }
    
    info(message) {
       // console.log("info: " + message);
        this.printMessage('(INFO) ' + message);
    }

    warn(message) {
        this.printMessage('(WARN) ' + message);
    }

}

module.exports = Logger;