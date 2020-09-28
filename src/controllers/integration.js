'use strict';

const bling = require('../controllers/bling');
const pipedrive = require('../controllers/pipedrive');

exports.integration = (req, res, next) => {
    pipedrive.getDeals(function (deals) {
        bling.postPedidos(deals, function(callback){
            res.send(callback);
        });      
        
    });
};