'use strict';
angular.module('visitsModule')

.service('visitsService', ['$http', 'apiHost', function ($http, apiHost) {

  // Visits operation
  this.addVisit = function (eventid) {
    return $http.post(apiHost + '/api/visit', { eventId : eventid });
  }

  this.deleteVisit = function (eventid) {
    return $http.delete(apiHost + '/api/visit/' + eventid );
  }

  // Get user visits
  this.GetUserVisits = function() {
    return $http.get(apiHost + '/api/user/id');
  }  
}]);