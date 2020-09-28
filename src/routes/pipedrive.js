'use strict';

const pipeDrive = require('express').Router();
const controller = require('../controllers/pipedrive');

pipeDrive.get('/deals', controller.get);

module.exports = pipeDrive;