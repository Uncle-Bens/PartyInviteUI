'use strict';
angular.module('userModule')

.service('userApiService', ['$http', 'apiHost', function ($http, apiHost) {
	this.GetUser = function(){
		return $http.get(apiHost + '/api/user/id');
	}
}]);