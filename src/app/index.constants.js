/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('partyInviteUi')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('apiHost', 'http://localhost:8027');
})();
