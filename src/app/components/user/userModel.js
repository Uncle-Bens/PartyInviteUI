'use strict';
angular.module('userModule')

.factory('UserModel', ['userApiService', function (userApiService){
	return function (){
		var self = this;

		userApiService.GetUser().success(function (data){
			self.currUser = data;
		});
	};
}])
