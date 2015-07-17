(function() {
  'use strict';

  angular
    .module('partyInviteUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
