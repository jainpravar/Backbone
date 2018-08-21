define(["backbone"], function (Backbone) {
    return Backbone.Model.extend({
        url: function(){
            return "http://localhost/backbone.basic/js/data/car.json";
        },
        parse: function(respose){
            var modelYear = respose.modelYear;
            var ageOfCar = 2018 - modelYear;
            respose.ageOfCar = ageOfCar;
            return respose;
        }
    });
});