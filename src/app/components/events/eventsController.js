'use strict';
angular.module('eventsModule')

.controller('EventsController', ['$scope','EventsModel', function ($scope, EventsModel) {
  $scope.vm = new EventsModel();
}]);