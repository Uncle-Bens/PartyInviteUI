'use strict';
angular.module('eventsModule')

.factory('EventsModel', ['eventApiService', 'serverService','accountService', '$location', 
	function (eventApiService, serverService, accountService, $location){
	return function (){
		var self = this;

		eventApiService.GetAllEvents().success(function (data){
			self.allEvents = data;
		});

		// self.addVisit = function (id) {
		// 	serverService.addVisit(id).success(function () { $location.path('/user'); });
		// }

		self.Visit = function () {
            var redirectPath = accountService.isLoggedIn()
                ? '/user'
                : '/login';
            $location.path(redirectPath);
		}

		self.getEventsbyDate = function (fromDate, untilDate) {
			eventApiService.getEventsbyDate(fromDate, untilDate).success(function (data) {
			self.allEvents = data; });
		}
	};
}]);