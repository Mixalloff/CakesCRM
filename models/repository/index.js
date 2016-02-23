'use strict';

var document = require('camo').Document;

class Repository{
    // Передается таблица, с которой будет производиться манипуляция
    constructor(document){
        this.document = document;
        //console.log("ctor repository");
    }
    
    createEntity(entity, callback){
        //console.log("start created");
        this.document.create(entity).save();
        if (typeof(callback) == "function"){
            callback(entity);
        }
        //console.log("created");
    }
    
    deleteEntity(entity, callback){
        this.document.delete(entity).save();
        if (typeof(callback) == "function"){
            callback(entity);
        }
        //console.log("deleted");
    }
    
    updateEntity(entity, callback){
        this.document.loadOneAndUpdate(entity).save();
        if (typeof(callback) == "function"){
            callback(entity);
        }
       // console.log("updated");
    }
    
    findEntity(entity, callback){
        return this.document.loadOne(entity).then(function(result){
            if (typeof(callback) == "function"){
            callback(result);
        }
            return result;   
        });
    }
    
    findAll(callback){
        //console.log("start find");
        this.document.loadMany({}).then((result)=>{
            if (typeof(callback) == "function"){
            callback(result);
        }
            return result;
        });
    }
}

module.exports = Repository;