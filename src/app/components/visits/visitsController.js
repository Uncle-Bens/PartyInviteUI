'use strict';
angular.module('visitsModule')

.controller('VisitsController', [ '$scope','visitModel', function ($scope, visitModel) {
  $scope.vm = new visitModel();
}]);