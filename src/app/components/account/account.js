'use strict';
angular.module('accountModule', [
  'ngRoute'
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/register', {
      templateUrl: 'app/components/account/register/register.html',
      controller: 'RegisterController'
    })
	.when('/login', {
	templateUrl: 'app/components/account/login/login.html',
	controller: 'LoginController'
    });
}]);