(function (app) {
    'use strict';

    app.controller('loginCtrl', loginCtrl);
    loginCtrl.$inject = ['$scope', '$rootScope', '$location', 'Data', 'Url', 'apiService','$state'];
    function loginCtrl($scope, $rootScope, $location, Data, Url, apiService,$state) {
        //$scope.pageClass = 'page-login';
        $rootScope.Baseurl = Url.getCommanUrlHost();
        $scope.AutherLogin = function () {
            var dataObj = {
                userName: 'uma.m@techmileage.com',
                password: 'mahesh123'
            };
            
            var AuthToken = '';
            $state.go('home');
          //  apiService.post($rootScope.Baseurl + '/login.php/loginAuth', dataObj, AuthToken, UserLogInDataSuccess, UserLogInDataFails);

            function UserLogInDataSuccess(response) {
                console.log(response.data);
                Data.setUserLogInResponseData(response.data);
                return $location.path('/home');
            }
            function UserLogInDataFails(response) {
                if (response.status != 200) {
                    alert("error: " + response.status + "--->" + error);
                }
            }


        };

        $scope.forgetpwd = function () {
            var emailid = $scope.emailid;
        }


    }
})(angular.module('homeLogistics'));