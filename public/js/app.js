((app)=>{
  app.constant('apiConfig', {
    baseUrl:('http://localhost:8000/tictactoe')
//  baseUrl:('');
  })

})(angular.module('app', [
  'app.home',
  'app.services'
]))
