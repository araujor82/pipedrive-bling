'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const healthCheck = require('./routes/healthcheck');
const pipeDrive = require('./routes/pipedrive');
const bling = require('./routes/bling');
const integration = require('./routes/integration');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/integration/', integration);

module.exports = app;