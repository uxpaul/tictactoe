((app) => {
  'use strict'

  app.factory('socket', ['$rootScope', function($rootScope) {
    //  let socket = io.connect('http://localhost:8000/tictactoe');
  //  let socket = io.connect('');
    return {
      on(eventName, callback) {
        socket.on(eventName, function() {
          let args = arguments;
          $rootScope.$apply(function() {
            callback.apply(socket, args);
          });
        });
      },
      emit(eventName, data, callback) {
        socket.emit(eventName, data, function() {
          let args = arguments;
          $rootScope.$apply(function() {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        })
      }
    };
  }]);

})(angular.module('app.services'))
