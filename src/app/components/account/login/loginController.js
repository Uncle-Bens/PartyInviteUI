'use strict';
angular.module('accountModule')

.controller('LoginController', ['$scope','accountService','$location', function ($scope, accountService, $location) {
	$scope.userName = "";
	$scope.password = null;

	$scope.login = function () {
		accountService.userLogin($scope.userName, $scope.password).then(function () {
			$location.path('/user');
		});
    }
}]);