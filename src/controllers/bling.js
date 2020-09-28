'use strict';

const Parser = require('../parsers/jsonToXML');
const request = require('request');

exports.post = (req, res, next) => {
    postPedidos(req.body, function(callback){
        res.status(201).send(callback);
    });
}

exports.postPedidos = (pedidos, callback) => {
    let base = 'https://bling.com.br/Api/v2/pedido/json?apikey=fa353d3efd775004ef61b4f2c124edbcf79012277bb1c381190af737d61a1189a17faeb1&xml=';
    
    Parser.parseToXML(pedidos, function (arrayxml) {
        arrayxml.forEach(element => {
            let uri = base.concat(element);
            
            request.post(uri,function (error, response, body) {
                callback(JSON.parse(body));
            });                       
        });               
    }); 
}