/**
 * Created by Mahesh on 2/14/2017.
 */

(function (app) {
/*
* Created the Factory To get the data and set the Data*/
    
    app.factory('Data', function () {
        var data = {
            UserLogInResponseData: ''
            
        };

        return {
            getUserLogInResponseData: function () {
                return data.UserLogInResponseData;
            },
            setUserLogInResponseData: function (userResponseInfo) {
                data.UserLogInResponseData = userResponseInfo;
            }
        };
    })
    app.factory('Url', function () {
         var url={
             CommanUrlHost: 'http://35.154.156.88:8080/LogisticsAPI'
                };
        return {
            getCommanUrlHost:function(){
                return url.CommanUrlHost;
            }
                };
    });
    
})(angular.module('homeLogistics'));