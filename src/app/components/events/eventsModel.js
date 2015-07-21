'use strict';
angular.module('eventsModule')

.factory('EventsModel', ['eventApiService', 'serverService','$filter', function (eventApiService, serverService, $filter){
	return function (){
		var self = this;
		
		eventApiService.GetAllEvents().success(function (data){
			self.allEvents = data;
		});

		self.addVisit = function (id) {
			serverService.addVisit(id).success(function () { $location.path('/user'); });
		}

		self.getEventsbyDate = function (fromDate, untilDate) {
			eventApiService.getEventsbyDate(fromDate, untilDate).success(function (data) {
			self.allEvents = data; });
		}
	};
}]);