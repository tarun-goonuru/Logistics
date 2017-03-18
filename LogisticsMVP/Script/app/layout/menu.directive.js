(function (app) {
   // 'use strict';

    app.directive('sideMenu', sideMenu);

    function sideMenu() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'Script/app/layout/menu.html'
        }
    }

})(angular.module('homeLogistics'));