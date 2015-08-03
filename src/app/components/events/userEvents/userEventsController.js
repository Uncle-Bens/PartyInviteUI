'use strict';
angular.module('userEventsModule')

.controller('UserEventsController', ['$scope','UserEventsModel', 'apiHost',
   function ($scope, UserEventsModel, apiHost) {
    $scope.vm = new UserEventsModel();
    $scope.apiHostPath = apiHost;
}]);