'use strict';
angular.module('userModule', [
  'ngRoute'
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/user', {
      templateUrl: 'app/components/user/user.html',
      controller: 'UserController'
    });
}]);