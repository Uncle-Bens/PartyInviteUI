'use strict';
angular.module('eventsModule')

.service('eventsService', ['$http', 'apiHost', function ($http, apiHost) {

  // Events operation
  this.GetAllEvents = function () {
    return $http.get(apiHost + '/api/event');
  }

  this.GetUserEvents = function() {
    return $http.get(apiHost + '/api/event/user');
  }

  this.GetOwnerEvents = function() {
    return $http.get(apiHost + '/api/event/owner');
  }

  this.getEventsbyDate = function (fromDate, untilDate) {
    return $http.get(apiHost + '/api/event/?fromdate=' + fromDate.toISOString() + 
      '&todate=' + untilDate.toISOString());
  }

  this.createEvent = function (newEvent) {
    return $http.post(apiHost + '/api/event', { EventName : newEvent.eventName,
     EventDescription : newEvent.eventDescription,
       Date : newEvent.dateTime.toISOString() 
    });
  }

  this.editEvent = function (eventid, newEvent) {
    return $http.put(apiHost + '/api/event/' + eventid, newEvent, { Date: newEvent.Date });
  }

  this.deleteEvent = function (eventid) {
    return $http.delete(apiHost + '/api/event/' + eventid );  
  }
}]);