(function (app){
    'use strict';
    app.controller('vehcileRegCtrl',vehcileRegCtrl);
    vehcileRegCtrl.$inject = ['$scope', '$rootScope', '$location', 'Data', 'Url', 'apiService', '$state'];
    function vehcileRegCtrl ($scope , $rootScope , $location , Data , Url , apiService , $state){
        $rootScope.Baseurl =Url.getCommanUrlHost();
        $scope.saveVehcileDetails = saveVehcileDetails;
        $scope.VehiclesData = {};
        function saveVehcileDetails(){
            console.log( $scope.VehiclesData);
            apiService.post($rootScope.Baseurl + '/vehicle', $scope.VehiclesData,'' ,onSuccess, onFailed);
        }
        function onSuccess(response) {
            console.log(response);
            alert(response.status);
            $state.go('home.regvehicle');
        }
        function onFailed(response) {
            console.log(response);
            alert(response)
        }

    }
})(angular.module('homeLogistics'));