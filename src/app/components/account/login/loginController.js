'use strict';
angular.module('accountModule')

.controller('LoginController', ['$scope','accountService','$location', function ($scope, accountService, $location) {
	$scope.userName = "";
	$scope.password = null;
  $scope.errorMessage = "error";
  $scope.serverError = false;

	$scope.login = function () {
		accountService.userLogin($scope.userName, $scope.password)
      .success(function () {
        $location.path('/events');
      }).
      error(function(response) {
        $scope.errorMessage = response.Message;
        $scope.serverError = true;
      });      
  };
}]);