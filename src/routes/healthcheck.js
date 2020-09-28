'use strict';

const healthCheck = require('express').Router();

healthCheck.get('/', (req, res, next) => {
    res.status(200).send('pong');
});

module.exports = healthCheck;