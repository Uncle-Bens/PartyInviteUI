'use strict';
angular.module('userModule')

.factory('UserModel', ['userApiService', 'serverService', '$location', '$route', 'deleteConfirmService', 'editEventService',
  function (userApiService, serverService, $location, $route, deleteConfirmService, editEventService){
	return function (){
		var self = this;

		// Delete modal content
    var eventModalContent = {
        title: 'Event delete confirmation',
        message: 'Are you sure you want to delete this event?'
    }

    var visittModalContent = {
        title: 'Visit delete confirmation',
        message: 'Are you sure you want to leave this event?'
    }

    // Form data
		self.newEvent = {
			dateTime: new Date(new Date().setMinutes(0, 0)),
			eventName: "",
			eventDescription: ""
		}

		// Events
		serverService.GetAllEvents().success( function (data){
			self.allEvents = data;
		});
		
		self.getEventsbyDate = function (fromDate, untilDate) {
			serverService.getEventsbyDate(fromDate, untilDate).success( function (data) {
			self.allEvents = data; });
		}

		self.userEvents = function () {
			userApiService.GetUser().success(function (data) { self.currUser = data; });
		}

		// self.createEvent = function (eventName, eventDescription, eventDate, eventTime) {
		// 	serverService.createEvent(eventName, eventDescription, eventDate, eventTime).success(function ()
		// 	 { $route.reload(); });
		// }

		self.createEvent = function (newEvent) {
			serverService.createEvent(newEvent).success(function ()
			 { $route.reload(); });
		}

		self.editEvent = function (oldEvent) {
			editEventService.editEvent(oldEvent, function (editingEvent) {
				serverService.editEvent(oldEvent.Id, editingEvent).success(function () { $route.reload(); });
			});
		}

		function deleteEvent(eventid) {
			serverService.deleteEvent(eventid).success(function () { $route.reload(); });
		}
		
		self.deleteEvent = function (eventid) {
				deleteConfirmService.deleteConfirmation(eventModalContent, function () {
                deleteEvent(eventid);
			});
		}

		// Visits
		self.addVisit = function (eventid) {
			serverService.addVisit(eventid).success(function () { $route.reload(); });
		}

		function deleteVisit(eventid) {
			serverService.deleteVisit(eventid).success(function () { $route.reload(); });
		}
		
		self.deleteVisit = function (eventid) {
				deleteConfirmService.deleteConfirmation(visittModalContent, function () {
                deleteVisit(eventid);
			});			
		}

	};

}])
