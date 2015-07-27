'use strict';
angular.module('editEventModule', [])

.service('editEventService', ['$rootScope', '$modal', function ($rootScope, $modal) {
    this.editEvent = function (oldEvent, action) {
        var templateUrl = '/app/components/user/editEvent/editEvent.html';

        var scope = $rootScope.$new();
        scope.newEvent = oldEvent;
        scope.action = action;

        var editEventModal = $modal({ scope: scope, template: templateUrl, show: false });
        editEventModal.$promise.then(editEventModal.show);
    }
}]);
