// app/routes.js

// load jade for html processing
var jade        = require('jade');

// load models
var Example     = require('./models/example');

// expose routes
module.exports = function(app) {
    // methods to manipulate data
    app.get('/api/example', function(req, res) {
        // todo
    });
    
    app.post('/api/example', function(req, res) {
        // todo
    });
    
    app.delete('/api/example:example_id', function(req, res) {
        // todo
    });
    
    // application routes
    app.get('*', function(req, res) {
        var data = jade.renderFile('./static/index.jade');
        res.contentType('text/html');
        res.send(200, data);
    });
};