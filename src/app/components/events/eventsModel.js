'use strict';
angular.module('eventsModule')

.factory('EventsModel', ['eventApiService', 'serverService', function (eventApiService, serverService){
	return function (){
		var self = this;

		eventApiService.GetAllEvents().success(function (data){
			self.allEvents = data;
		});

		self.addVisit = function (id) {
			serverService.addVisit(id).success(function () { $location.path('/user'); });
		}
	};
}])