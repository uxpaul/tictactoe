((app) => {

    app.component('home', {
        templateUrl: 'js/components/home/home.html',
        controller: function($http) {


          this.test = "tictactoe"

        }
    })

})(angular.module('app.home'))
