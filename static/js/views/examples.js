// static/js/views/examples.js

var app = app || {};

app.ExamplesView = Backbone.View.extend({
    el: '#examples',
    
    initialize: function(initialExamples) {
        this.collection = new app.Examples(initialExamples);
        this.render();
    },
    
    // render examples by rendering each example in its collection
    render: function() {
        this.collection.each(function(item) {
            this.renderExample(item);
        }, this );
    },
    
    // render an example by creating an ExampleView and appending the
    // element it renders to the examples collections element
    renderExample: function(item) {
        var exampleView = new app.ExampleView({
            model: item
        });
        
        this.$el.append(exampleView.render().el);
    }
    
});