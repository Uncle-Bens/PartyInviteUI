'use strict';
angular.module('eventsModule', [
  'ngRoute', 'userEventsModule', 'ownerEventsModule','newEventsModule'
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
     .when('/events', {
        templateUrl: 'app/components/events/events.html',
        controller: 'EventsController'
      });
}]);