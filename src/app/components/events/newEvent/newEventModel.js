'use strict';
angular.module('newEventsModule')

.factory('NewEventModel', ['newEventsService','$location', function (newEventsService, $location) {
  return function () {
    var self = this;
  
    // Form data
    self.newEvent = {
      dateTime: new Date(new Date().setMinutes(0, 0)),
      eventName: "",
      eventDescription: ""
    }

    self.createEvent = function (file, newEvent) 
    {
      newEventsService.createEvent(file, newEvent).success(function ()
       { $location.path('/ownerEvents'); });
    }        
  }
}]);