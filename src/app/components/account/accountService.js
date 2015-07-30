'use strict';
angular.module('accountModule')

.service('accountService', ['$http','localStorageService', 'apiHost', function ($http, localStorageService, apiHost) {
  var self = this;

  this.userToken = function () {
        return self.isLoggedIn() ? localStorageService.getToken() : '';
    };
  
  this.isLoggedIn = localStorageService.isTokenExist;

  this.userRegister = function (username, password) {
    return $http.post(apiHost + '/api/user/register',
      {userName: username, Password: password});
  };

  this.userLogin = function (username, password){
    return $http.post(apiHost + '/api/user/login', {userName: username, Password: password})
    .success(function (response){
      localStorageService.setToken(response.Token);
    });
  };

    this.logoff = function () { 
      localStorageService.removeToken();
     };
}])

.factory('LoginInterceptor', ['localStorageService', function (localStorageService) {
    return {
        request: function (config) {
            var token = localStorageService.getToken();
            if (token) {
              config.headers.Authorization = token;
          }
            return config;
            
        }
    }
}]);