// web.js

// set up
var express     = require('express');
var http        = require('http');
var sys         = require('util');
var rest        = require('restler');
var fs          = require('fs');
var stylus      = require('stylus');
var mongoose    = require('mongoose');

// load config and create database
var database    = require('./config/database');
mongoose.connect(database.url);

// create and configure express app
var app = express();

app.configure(function() {
    app.use(stylus.middleware(__dirname + '/static'));
    app.use(express.static(__dirname + '/static'));
    app.use(express.bodyParser());
    app.set('port', process.env.PORT || 8080);
});

// load routes
require('./app/routes.js')(app);

// For seeing changes without stoping, starting the server, install nodemon globally npm install -g nodemon. Start your server with nodemon server.js
http.createServer(app).listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
