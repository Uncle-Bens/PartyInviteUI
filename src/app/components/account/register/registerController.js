'use strict';
angular.module('accountModule')

.controller('RegisterController', ['$scope','accountService', '$location', function ($scope, accountService, $location) {
	$scope.userName = "";
	$scope.password = null;

	$scope.register = function () {
		accountService.userRegister($scope.userName, $scope.password).then(function () {
			$location.path('/login');
		});
    }
}]);