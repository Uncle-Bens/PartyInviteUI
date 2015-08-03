'use strict';
angular.module('newEventsModule')

.controller('NewEventController', ['$scope','NewEventModel', function ($scope, NewEventModel) {
  $scope.vm = new NewEventModel();
}]);