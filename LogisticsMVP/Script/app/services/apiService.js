(function (app) {
    'use strict';

    app.factory('apiService', apiService);

    apiService.$inject = ['$http', '$location', '$rootScope'];

    function apiService($http, $location, $rootScope) {
        var service = {
            get: get,
            post: post
        };

        function get(url, config, header, success, failure) {
            return $http.get(url, config, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "'" + header + "'"
                }
            }).then(function (result) {
                success(result);
            }, function (error) {
                if (error.status == '401') {
                    console.write('Authentication required.');
                    $rootScope.previousState = $location.path();
                    $location.path('/login');
                }
                else if (failure != null) {
                    failure(error);
                }
            });
        }

        function post(url, data, header, success, failure) {
            return $http.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "'" + header + "'"
                }
            }).then(function (result) {
                success(result);
            }, function (error) {
                if (error.status == '401') {
                    console.write('Authentication required.');
                    $rootScope.previousState = $location.path();
                    $location.path('/login');
                }
                else if (failure != null) {
                    failure(error);
                }
            });
        }

        return service;
    }

})(angular.module('homeLogistics'));