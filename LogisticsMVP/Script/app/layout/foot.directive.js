(function (app) {
  //  'use strict';

    app.directive('footer', footer);

    function footer() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'Script/app/layout/foot.html'
        }
    }

})(angular.module('homeLogistics'));