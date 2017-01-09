((app) => {
    'use strict'

    app.service('usersService', ['$http', 'apiConfig', function($http, apiConfig) {
        return {

            get() {
                return $http.get(apiConfig.baseUrl + '/api/users')
            },
            getPopulate(id) {
                return $http.get(apiConfig.baseUrl + '/api/users/' + id)
            },
            add(users) {
                return $http.post(apiConfig.baseUrl + '/api/users', users)
            },
            edit(users) {
                return $http.put(apiConfig.baseUrl + '/api/users/' + users._id, users)
            },
            delete(users) {
                return $http.delete(apiConfig.baseUrl + '/api/users/' + users._id)
            }
        }
    }])

})(angular.module('app.services'))
