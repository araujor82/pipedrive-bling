'use strict';

const request = require('request');

exports.get = (req, res, next) => {      
    getDeals(function(callback){
        res.status(200).send(callback);
    });
}

exports.getDeals = (callback) => {
    request('https://api.pipedrive.com/v1/deals?status=won&start=0&api_token=a428dee1fa85f4ba00caae9463d78cfbd68ac129',   
        function (error, response, body) {              
            callback(JSON.parse(body).data);
        }); 
}