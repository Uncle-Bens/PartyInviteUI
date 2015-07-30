'use strict';
angular.module('eventsModule')

.factory('EventsModel', ['eventsService','accountService', '$location', 'visitsService',
  function (eventsService, accountService, $location, userApiService, visitsService){
  return function (){
    var self = this;

    if (accountService.isLoggedIn()) $location.path('/userEvents');
    eventsService.GetAllEvents().success(function (data){
      self.allEvents = data;
    });

    self.addVisit = function () {
        $location.path('/login');      
    }

    self.getEventsbyDate = function (fromDate, untilDate) {
      eventsService.getEventsbyDate(fromDate, untilDate).success(function (data) {
      self.allEvents = data; });
    }
  };
}]);