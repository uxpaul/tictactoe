((app) => {

    app.component('fruits', {
      bindings: {
        selectedFruit : "="
      },
        templateUrl: 'js/components/fruits/fruits.html',
        controller: function() {

            this.fruits = [{
                "name": "kiwi",
                "price": 8
            }, {
                "name": "pomme",
                "price": 2
            }, {
                "name": "orange",
                "price": 3
            }]




        }
    })

})(angular.module('app.fruits'))
