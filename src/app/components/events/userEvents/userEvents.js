'use strict';
angular.module('userEventsModule', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
     .when('/userEvents', {
        templateUrl: 'app/components/events/userEvents/userEvents.html',
        controller: 'UserEventsController'
      });    
}]);