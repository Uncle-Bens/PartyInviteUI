'use strict';
angular.module('eventsModule')

.service('eventApiService', ['$http', function ($http) {
	this.GetAllEvents = function () {
		return $http.get('http://localhost:8027/api/event');
	}
}]);