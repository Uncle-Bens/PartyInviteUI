'use strict';
angular.module('eventsModule')

.factory('EventsModel', ['serverService','accountService', '$location', 
	function (serverService, accountService, $location){
	return function (){
		var self = this;

		if (accountService.isLoggedIn()) $location.path('/user');
		serverService.GetAllEvents().success(function (data){
			self.allEvents = data;
		});

		self.Visit = function () {
            var redirectPath = accountService.isLoggedIn()
                ? '/user'
                : '/login';
            $location.path(redirectPath);
		}

		self.getEventsbyDate = function (fromDate, untilDate) {
			serverService.getEventsbyDate(fromDate, untilDate).success(function (data) {
			self.allEvents = data; });
		}
	};
}]);