// app/models/example.js
var mongoose    = require('mongoose');

var exampleSchema = new mongoose.Schema({
    text    : String,
    date      : Date
});

module.exports = mongoose.model('Example', exampleSchema);