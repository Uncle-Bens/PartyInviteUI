'use strict';
angular.module('eventsModule')

.service('editEventService', ['$rootScope', '$modal', function ($rootScope, $modal) {
    this.editEvent = function (oldEvent, action) {
        var templateUrl = '/app/components/events/editEvent/editEvent.html';

        var scope = $rootScope.$new();
        scope.newEvent = oldEvent;
        scope.action = action;

        var editEventModal = $modal({ scope: scope, template: templateUrl, show: false });
        editEventModal.$promise.then(editEventModal.show);
    }
}]);