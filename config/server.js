var express = require('express');
var app = express();

app.use(express.static('./'));

var porta = process.env.PORT || 3878

module.exports = {app, porta};