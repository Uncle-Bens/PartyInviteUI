'use strict';
angular.module('serverModule', [])

.service('serverService', ['$http', function ($http) {

	this.addVisit = function (eventid) {
		return $http.post('http://localhost:8027/api/visit', { eventId : eventid });
	}

}]);