// static/js/views/example.js

var app = app || {};

app.ExampleView = Backbone.View.extend({
    tagName: 'div',
    className: 'exampleContainer',
    template: _.template($('exampleTemplate').html()),
    
    render: function() {
        // this.$el is defined in tagName. use $el to get access to jQuery html() function.
        this.$el.html(this.template(this.model.toJSON()));
        
        return this;
    }
});