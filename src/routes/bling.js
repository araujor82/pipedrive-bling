'use strict';

const bling = require('express').Router();
const controller = require('../controllers/bling');

bling.post('/pedidos', controller.post);

module.exports = bling;