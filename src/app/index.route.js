(function() {
  'use strict';

  angular
    .module('partyInviteUi')
    .config(routeConfig);

  function routeConfig($routeProvider) {
     $routeProvider
     /*.when('/', {
        templateUrl: 'app/components/events/events.html',
        controller: 'EventsController',
        controllerAs: 'events'
      })*/

      .otherwise({
        redirectTo: '/'
      });
  }

})();
