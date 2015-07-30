'use strict';
angular.module('newEventsModule')

.factory('NewEventModel', ['eventsService','$location', function (eventsService, $location) {
  return function () {
    var self = this;
  
    // Form data
    self.newEvent = {
      dateTime: new Date(new Date().setMinutes(0, 0)),
      eventName: "",
      eventDescription: ""
    }    

    self.createEvent = function (newEvent) {
      eventsService.createEvent(newEvent).success(function ()
       { $location.path('/ownerEvents'); });
    };    
  } 

}]);