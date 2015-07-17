'use strict';
angular.module('userModule')

.service('userApiService', ['$http', function ($http) {
	this.GetUser = function(){
		return $http.get('http://localhost:8027/api/user/id');
	}
}]);