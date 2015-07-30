'use strict';
angular.module('userEventsModule')

.controller('UserEventsController', ['$scope','UserEventsModel', function ($scope, UserEventsModel) {
  $scope.vm = new UserEventsModel();
}]);