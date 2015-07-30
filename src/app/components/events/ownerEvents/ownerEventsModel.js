'use strict';
angular.module('ownerEventsModule')

.factory('OwnerEventsModel', ['eventsService','editEventService', 'deleteConfirmService', '$location', '$route',
 function (eventsService, editEventService, deleteConfirmService, $location, $route) {
  return function () {
    var self = this;
    
    eventsService.GetOwnerEvents().success(function (data) { self.ownerEvents = data; });

    self.editEvent = function (oldEvent) {
      editEventService.editEvent(oldEvent, function (editingEvent) {
        eventsService.editEvent(oldEvent.Id, editingEvent).success(function () { $location.path('/ownerEvents'); });
      });
    };    

    // Delete event modal content
    var eventModalContent = {
        title: 'Event delete confirmation',
        message: 'Are you sure you want to delete this event?'
    }    

    function deleteEvent(eventid) {
      eventsService.deleteEvent(eventid).success(function () { $route.reload(); });
    };
    
    self.deleteEvent = function (eventid) {
        deleteConfirmService.deleteConfirmation(eventModalContent, function () {
                deleteEvent(eventid);
      });
    };
  }
}]);