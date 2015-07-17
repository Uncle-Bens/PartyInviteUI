'use strict';
angular.module('userModule')

.controller('UserController', [ '$scope','UserModel', function ($scope, UserModel) {
 	// $scope.vm = new UserModel();
 	  $scope.tab = { title:'Dynamic Title', content:'Dynamic content' };
}]);
