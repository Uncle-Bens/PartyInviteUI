'use strict';
angular.module('accountModule')

.service('localStorageService', ['$window', function ($window){

  this.setToken = function (accessToken) { $window.localStorage.setItem('token', accessToken); };

  this.getToken = function () { return $window.localStorage.getItem('token'); }

  this.removeToken = function () { $window.localStorage.removeItem('token'); };

  this.isTokenExist = function () { return !!($window.localStorage.getItem('token')); };
}]);