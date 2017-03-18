/// <reference path="../../Venders/angular-1.6.1/angular.min.js" />

(function (app) {
    app.controller('regcumpanyCtrl', regcumpanyCtrl);
    regcumpanyCtrl.$inject = ['$scope', '$rootScope', '$location', 'Data', 'Url', 'apiService', '$state'];
    function regcumpanyCtrl($scope, $rootScope, $location, Data, Url, apiService, $state) {
        $rootScope.Baseurl = Url.getCommanUrlHost();
        $scope.states = [
            {"name": "Andhra Pradesh"},
            {"name": "Arunachal Pradesh"},
            {"name": "Assam"},
            {"name": "Bihar"},
            {"name": "Chhattisgarh"},
            {"name": "Goa"},
            {"name": "Gujarat"},
            {"name": "Haryana"},
            {"name": "Himachal Pradesh"},
            {"name": "Jammu and Kashmir"},
            {"name": "Jharkhand"},
            {"name": "Karnataka"},
            {"name": "Kerala"},
            {"name": "Madhya Pradesh"},
            {"name": "Maharashtra"},
            {"name": "Manipur"},
            {"name": "Meghalaya"},
            {"name": "Mizoram"},
            {"name": "Nagaland"},
            {"name": "Odisha"},
            {"name": "Punjab"},
            {"name": "Rajasthan"},
            {"name": "Sikkim"},
            {"name": "Tamil Nadu"},
            {"name": "Telangana"},
            {"name": "Tripura"},
            {"name": "Uttar Pradesh"},
            {"name": "Uttarakhand"},
            {"name": "West Bengal"}];
        $scope.addCompany = addCompany;
        $scope.updateCompany = updateCompany;        
        $scope.company = {};
        $scope.company.base64Image = '';
        $scope.logoFile;
        
        function addCompany() {
              $scope.company.authToken = '4bxizo5fr09';
            console.log($scope.company);
            apiService.post($rootScope.Baseurl + '/company', $scope.company, $scope.company.authToken, onSuccess, onFailed);
        }
        function onSuccess(response) {
            console.log(response);
            alert(response.status);
            $state.go('home.companies');
        }
        function onFailed(response) {
            console.log(response);
            alert(response)
        }
        function updateCompany() {

        }

        //Convert Image to base64 string
        function convert_base64() {
            var FR = new FileReader();
            FR.addEventListener("load", function (e) {
                $scope.company.base64Image = e.target.result;
                console.log($scope.company.base64Image);
            });
            FR.readAsDataURL($scope.logoFile);            
        }
        $scope.uploadFile = function(files) {
            var fd = new FormData();
            fd.append("file", files[0]);
            $scope.logoFile = files[0];
            convert_base64();
        };
        // end base64 string
    }
})(angular.module('homeLogistics'));