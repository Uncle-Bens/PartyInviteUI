(function() {

  'use strict';
  angular.module('partyInviteUi')

  .directive('navibar', ['accountService', function (accountService) {
      return {
          scope: {},
          templateUrl: 'app/components/navbar/navbar.html',
          link: function (scope) {
              scope.$watch(accountService.isLoggedIn, function (value) {
                  scope.isLoggedIn = value;
              });
              scope.logoff = accountService.logoff;
          }
      };
  }]);
      
})();
