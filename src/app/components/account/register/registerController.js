'use strict';
angular.module('accountModule')

.controller('RegisterController', ['$scope','accountService', '$location', function ($scope, accountService, $location) {
	$scope.userName = "";
	$scope.password = null;
	$scope.confirmPassword = null;

	$scope.register = function () {
		accountService.userRegister($scope.userName, $scope.password, $scope.confirmPassword).then(function () {
			$location.path('/login');
		});
    }
}]);