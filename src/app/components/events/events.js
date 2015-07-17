'use strict';
angular.module('eventsModule', [
  'ngRoute'
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/events/events.html',
      controller: 'EventsController'
    });
}]);