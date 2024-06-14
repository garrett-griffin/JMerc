// index.js
require('dotenv').config();
require('reflect-metadata');

const Client = require('./api/client');
const Turn = require('./models/turn');
const TownsAPI = require('./api/towns');

module.exports = {
    Client,
    Turn,
    TownsAPI
};
