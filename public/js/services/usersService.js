((app) => {
    'use strict'

    app.service('usersService', function($http) {
        return {

            get() {
                return $http.get('/api/users')
            },
            getPopulate(id){
              return $http.get('/api/users/'+ id )
            },
            add(users) {
                return $http.post('/api/users', users)
            },
            edit(users) {
                return $http.put('/api/users/' + users._id, users)
            },
            delete(users) {
                return $http.delete('/api/users/' + users._id)
            }
        }
    })

})(angular.module('app.services'))
