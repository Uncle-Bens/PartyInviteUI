'use strict';
angular.module('ownerEventsModule', ['ngRoute', 'newEventsModule'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
     .when('/ownerEvents', {
        templateUrl: 'app/components/events/ownerEvents/ownerEvents.html',
        controller: 'OwnerEventsController'
      })
    .when('/newEvent', {
      templateUrl: 'app/components/events/newEvent/newEvent.html',
      controller: 'NewEventController'
    });    
}]);