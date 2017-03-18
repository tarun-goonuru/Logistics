/// <reference path="../../Venders/angular-1.6.1/angular.min.js" />

(function (app) {
    app.controller('regEmployeeCtrl', regEmployeeCtrl);
    regEmployeeCtrl.$inject = ['$scope', '$rootScope', '$location', 'Data', 'Url', 'apiService', '$state'];
    function regEmployeeCtrl($scope, $rootScope, $location, Data, Url, apiService, $state) {
        $rootScope.Baseurl = Url.getCommanUrlHost();
        $scope.addEmployee = addEmployee;
        $scope.addEmployeeAdditionalData = addEmployeeAdditionalData;
        $scope.employeeInfo = {};
        $scope.employeeAdditionalInfo = {};
        $scope.employeeAdditionalInfo.base64 = '';
        //catch the file form uploaded file
        $scope.logoFile;
        //Disable 'Additional information' tab for before complete Basic info.
       /* $scope.showTab = "true";*/
        //these are testing purpose
        //$scope.employeeInfo.userId = "abc";
        //$scope.employeeInfo.authToken = '';

        function addEmployee() {
           // apiService.post()
           // console.log($scope.employeeInfo);
           apiService.post($rootScope.Baseurl + '/user', $scope.employeeInfo,'' ,onSuccess, onFailed);
           // alert("Okk");

        }
        function onSuccess(response) {
            console.log("Success"+response);
            /*$scope.showTab = "false";
            $scope.$apply()*/
            alert(response);
        }
        function onFailed(response) {
            console.log("Failure" + response);
            alert(response);
        }
        function addEmployeeAdditionalData() {
           // console.log($scope.employeeAdditionalInfo);
            apiService.post($rootScope.Baseurl + '/user/addUserAdditionalInfo', $scope.employeeAdditionalInfo,'' ,onSuccessAdditionalInfo, onFailedAdditionalInfo);
        }
        function onSuccessAdditionalInfo(response) {
            console.log("Success" + response);
            alert(response);
        }
        function onFailedAdditionalInfo(response) {
            console.log("Failure" + response);
            alert(response);
        }
        //Convert Image to base64 string
        function convert_base64() {
            var FR = new FileReader();
            FR.addEventListener("load", function (e) {
                $scope.employeeAdditionalInfo.base64 = e.target.result;
                console.log($scope.employeeAdditionalInfo.base64);
            });
            FR.readAsDataURL($scope.logoFile);
        }
        $scope.uploadFile = function (files) {
            var fd = new FormData();
            fd.append("file", files[0]);
            $scope.logoFile = files[0];
            convert_base64();
        };
        // end base64 string
    }
})(angular.module('homeLogistics'));