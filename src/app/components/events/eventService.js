'use strict';
angular.module('eventsModule')

.service('eventApiService', ['$http', function ($http) {
	this.GetAllEvents = function () {
		return $http.get('http://localhost:8027/api/event');
	}

	this.getEventsbyDate = function (fromDate, untilDate) {
		return $http.get('http://localhost:8027/api/event/?fromdate=' + fromDate.toISOString() + 
			'&todate=' + untilDate.toISOString());
	}
}]);