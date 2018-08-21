define(["jquery",
    "backbone",
    "hbars!src/templates/car-template",
    "backbone.marionette"],
function ($,
    Backbone,
    template) {
    return Backbone.Marionette.ItemView.extend({
        tagName: "tr",
        initialize: function(){
            console.log("In constructor");
            this.listenTo(this, "event:xyz", this.xyz);
        },
        template: template,
        modelEvents: {
            "change": "modelChanges"
        },
        events: {
            "click #add-car": "addCar"
        },
        addCar: function () {
            console.log("Button Clicked");
            this.trigger("event:xyz", 123, 123);          
        },
        modelChanges: function () {
            console.log("In Model Change event");
        },
        xyz: function(params, param2){
            console.log("in event of view"+param2 +"& "+ params);
            this.model.set({ name: $("#car-name").val(), company: $("#car-company").val() });
            console.log("Model: " + JSON.stringify(this.model.toJSON()));
            this.render();
        }
    });
});