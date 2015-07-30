'use strict';
angular.module('visitsModule', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
     .when('/visits', {
        templateUrl: 'app/components/visits/visits.html',
        controller: 'VisitsController'
      });
}]);