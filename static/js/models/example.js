// static/js/models/example.js

var app = app || {};

app.Example = Backbone.Model.extend({
    defaults: {
        name: 'Example',
        mail: 'example@example.com'
    },
    
    idAttribute: '_id'
});