'use strict';
angular.module('ownerEventsModule')

.controller('OwnerEventsController', ['$scope','OwnerEventsModel', function ($scope, OwnerEventsModel) {
  $scope.vm = new OwnerEventsModel();
}]);