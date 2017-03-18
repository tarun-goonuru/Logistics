(function (app) {
    'use strict';

    app.controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$location', '$rootScope', 'Data', 'Url', 'apiService'];
    function homeCtrl($scope, $location, $rootScope, Data, Url, apiService) {

        $scope.UserloginInfo = Data.getUserLogInResponseData();

        console.log($scope.UserloginInfo);
    }

})(angular.module('homeLogistics'));