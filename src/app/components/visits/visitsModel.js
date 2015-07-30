'use strict';
angular.module('visitsModule')

.factory('visitModel', ['visitsService', 'deleteConfirmService', 'eventsService','$route',
 function (visitsService, deleteConfirmService, eventsService, $route) {
  return function () {
    var self = this;

    visitsService.GetUserVisits().success(function (data) { self.currUser = data; });

    // Delete modal content
    var visitModalContent = {
        title: 'Visit delete confirmation',
        message: 'Are you sure you want to leave this event?'
    }   

    function deleteVisit(eventid) {
      visitsService.deleteVisit(eventid).success(function () { $route.reload(); });
    };
    
    self.deleteVisit = function (eventid) {
        deleteConfirmService.deleteConfirmation(visitModalContent, function () {
                deleteVisit(eventid);
      });     
    };
  };

}]);