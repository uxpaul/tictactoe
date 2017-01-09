((app) => {

    app.component('home', {
        templateUrl: 'js/components/home/home.html',
        controller: ['$http', 'socket', function($http, socket) {

          socket.on('stats', (data) => console.log('Joueurs:', data.numClients))

          
            angular.extend(this, {
                $onInit() {

                    this.test = "TicTacToe"


                }
            })
        }]
    })

})(angular.module('app.home'))
