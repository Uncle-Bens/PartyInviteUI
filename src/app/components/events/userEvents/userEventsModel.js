'use strict';
angular.module('userEventsModule')

.factory('UserEventsModel', ['eventsService','editEventService', 'deleteConfirmService', '$location', '$route', 'visitsService',
 function (eventsService, editEventService, deleteConfirmService, $location, $route, visitsService) {
  return function () {
    var self = this;
    
    eventsService.GetUserEvents().success(function (data) { self.userEvents = data; });

    self.addVisit = function (eventid) {
        visitsService.addVisit(eventid).success(function () { $location.path('/visits'); });
    }

    self.getEventsbyDate = function (fromDate, untilDate) {
      eventsService.getEventsbyDate(fromDate, untilDate).success(function (data) {
      self.userEvents = data; });
    }    
  }
}]);