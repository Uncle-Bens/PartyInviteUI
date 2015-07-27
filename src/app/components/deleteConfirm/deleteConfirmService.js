'use strict';
angular.module('confirmModule', [])

.service('deleteConfirmService', ['$rootScope', '$modal', function ($rootScope, $modal) {
    this.deleteConfirmation = function (modalContent, action) {
        var templateUrl = '/app/components/deleteConfirm/deleteConfirm.html';

        var scope = $rootScope.$new();
        scope.title = modalContent.title;
        scope.message = modalContent.message;
        scope.action = action;

        var deleteConfirmModal = $modal({ scope: scope, template: templateUrl, show: false });
        deleteConfirmModal.$promise.then(deleteConfirmModal.show);
    }
}]);
