'use strict';
angular.module('ownerEventsModule')

.controller('OwnerEventsController', ['$scope','OwnerEventsModel','apiHost',
   function ($scope, OwnerEventsModel, apiHost) {
    $scope.vm = new OwnerEventsModel();
    $scope.apiHostPath = apiHost;
}]);