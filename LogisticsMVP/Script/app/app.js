(function () {
   // 'use strict';

    angular.module('homeLogistics', ['common.core'])
        .config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider','$rootScopeProvider','$locationProvider'];
    function config($stateProvider,$urlRouterProvider,$rootScopeProvider,$locationProvider) {

       $rootScopeProvider.digestTtl(15);
       
        $urlRouterProvider.otherwise("/login");
        $stateProvider
        .state('/', {
            url: "/login",
            templateUrl: 'Script/app/account/login.html',
            controller: 'loginCtrl',
            data: { pageTitle: 'Login' }
        })
        .state('login', {
            url: "/login",
            templateUrl: 'Script/app/account/login.html',
            controller: 'loginCtrl',
            data: { pageTitle: 'Login' }
        })
         .state('forgetpwd', {
                url: "/forgetpassword",
                templateUrl: 'Script/app/account/forgetpassword.html',
                controller: 'loginCtrl',
                data: { pageTitle: 'forget password' }
            })
         .state('home', {
             url: "/home",
             templateUrl: 'Script/app/home/home.html',
             controller: 'homeCtrl',
             data: { pageTitle: 'Home' }
         })
        .state('home.companies', {
            url: "/companies",
            templateUrl: 'Script/app/companies/companies.html',

            parent: 'home',
            data: { pageTitle: 'Home' }
        }).state('home.regcompany', {
            url: "/companyreg",
            controller:'regcumpanyCtrl',
            templateUrl: 'Script/app/companies/regCompany.html',

            parent: 'home',
            data: { pageTitle: 'Home' }
        }).state('home.employeelist', {
            url: "/employeelist",
            templateUrl: 'Script/app/employee/employeelist.html',           
            parent: 'home',
            data: { pageTitle: 'Employee list' }
        }).state('home.regemployee', {
            url: "/employeereg",
            
            templateUrl: 'Script/app/employee/regEmployee.html',
            controller: 'regEmployeeCtrl',
            parent: 'home',
            data: { pageTitle: 'Add Employee' }
        }).state('home.vehiclelist', {
            url: "/vehiclelist",
            templateUrl: 'Script/app/vehicle/vehiclelist.html',
            parent: 'home',
            data: { pageTitle: 'Vehicle List' }
        }).state('home.regvehicle', {
            url: "/vehiclereg",
            templateUrl: 'Script/app/vehicle/regVehicle.html',
            controller: 'vehcileRegCtrl',
            parent: 'home',
            data: { pageTitle: 'Add Vehicle' }
        });
             
        $locationProvider.hashPrefix('');
    }
})();