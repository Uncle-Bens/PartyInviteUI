'use strict';
angular.module('serverModule', [])

.service('serverService', ['$http', 'apiHost', function ($http, apiHost) {

	// Events operation
	this.GetAllEvents = function () {
		return $http.get(apiHost + '/api/event');
	}

	this.getEventsbyDate = function (fromDate, untilDate) {
		return $http.get(apiHost + '/api/event/?fromdate=' + fromDate.toISOString() + 
			'&todate=' + untilDate.toISOString());
	}

	this.createEvent = function (eventName, eventDescription, eventDate) {
		return $http.post(apiHost + '/api/event', { EventName : eventName,
		 EventDescription : eventDescription,  Date : eventDate.toISOString() });
	}

	this.deleteEvent = function (eventid) {
		return $http.delete(apiHost + '/api/event/' + eventid );	
	}
	// Visit operation
	this.addVisit = function (eventid) {
		return $http.post(apiHost + '/api/visit', { eventId : eventid });
	}

	this.deleteVisit = function (eventid) {
		return $http.delete(apiHost + '/api/visit/' + eventid );
	}
}]);