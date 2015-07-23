'use strict';
angular.module('userModule')

.factory('UserModel', ['userApiService', 'serverService', '$location', '$route',
  function (userApiService, serverService, $location, $route){
	return function (){
		var self = this;

		serverService.GetAllEvents().success(function (data){
			self.allEvents = data;
		});
		
		self.getEventsbyDate = function (fromDate, untilDate) {
			serverService.getEventsbyDate(fromDate, untilDate).success(function (data) {
			self.allEvents = data; });
		}

		self.userEvents = function () {
			userApiService.GetUser().success(function (data) { self.currUser = data; });
		}

		self.createEvent = function (eventName, eventDescription, eventDate) {
			serverService.createEvent(eventName, eventDescription, eventDate).success(function ()
			 { $route.reload(); });
		}

		self.deleteEvent = function (eventid) {
			serverService.deleteEvent(eventid).success(function () { $route.reload(); });
		}

		self.addVisit = function (eventid) {
			serverService.addVisit(eventid).success(function () { $route.reload(); });
		}

		self.deleteVisit = function (eventid) {
			serverService.deleteVisit(eventid).success(function () { $route.reload(); });
		}
	};
}])
