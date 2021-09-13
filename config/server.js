var express = require('express');
var app = express();

app.use(express.static('./'));

var porta = 5056;

module.exports = {app, porta};