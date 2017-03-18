/// <reference path="../../Venders/angular-1.6.1/angular.min.js" />

(function (app) {
    app.controller('menuCtrl', menuCtrl);
    menuCtrl.$inject = ['$scope', '$location', '$rootScope'];
    function menuCtrl($scope, $location, $rootScope) {

        $scope.getMenuItems=function() {
            var menuItems = [];
            menuItems = [{ id: 1, name: 'Dashboard', cssClass: 'fa fa-tachometer', state: 'home' },
                { id: 2, name: 'Companies', cssClass: 'fa fa-tachometer', state: 'home.companies' },
                { id: 3, name: 'Settings', cssClass: 'fa fa-cog', state: 'home.settings' }
            , { id: 5, name: 'Employee', cssClass: 'fa fa-cog', state: 'home.employeelist' }
            , { id: 6, name: 'Vehicle', cssClass: 'fa fa-cog', state: 'home.vehiclelist' }];
            return menuItems;
        }
        $scope.menuItems = $scope.getMenuItems();
    }
})(angular.module('homeLogistics'));