// static/js/app.js

var app = app || {};

$(function() {
    var examples = [
        { name : 'Mr. Smith', mail: 'smith@matrix.com'},
        { name : 'Neo'      , mail: 'neo@matrix.com'}
    ];
    
    new app.ExamplesView(examples);
});