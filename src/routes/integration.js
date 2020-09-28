'use strict';

const integration = require('express').Router();
const controller = require('../controllers/integration');

integration.post('/', controller.integration);

module.exports = integration;
