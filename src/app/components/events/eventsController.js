'use strict';
angular.module('eventsModule')

.controller('EventsController', ['$scope','EventsModel', 'apiHost', function ($scope, EventsModel, apiHost) {
  $scope.vm = new EventsModel();
  $scope.apiHostPath = apiHost;
}]);