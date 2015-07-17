'use strict';
angular.module('accountModule')

.service('accountService', ['$http','localStorageService', function ($http,localStorageService) {
	var self = this;

	this.userName = function () {
        return self.isLoggedIn() ? localStorageService.getUserName() : '';
    };
	
	this.isLoggedIn = localStorageService.isTokenExist;

	this.userRegister = function (username, password, confirmPassword) {
		return $http.post('http://localhost:8027/api/user/register',
			{userName: username, Password: password, ConfirmPassword: confirmPassword});
	};

	this.userLogin = function (username, password){
		return $http.post('http://localhost:8027/api/user/login', {userName: username, Password: password})
		.then(function (response){
			localStorageService.setToken(response.data.Token);
		});
	};

    this.logoff = function () { 
    	localStorageService.removeToken();
    	localStorageService.removeUserName();
     };
}])

.service('localStorageService', ['$window', function ($window){

	// $window.localStorage.setItem('userName', 'Mike');

	this.setToken = function (accessToken) { $window.localStorage.setItem('token', accessToken); };

	this.getToken = function () { return $window.localStorage.getItem('token'); }

	this.removeToken = function () { $window.localStorage.removeItem('token'); };

	this.isTokenExist = function () { return !!($window.localStorage.getItem('token')); };

	this.setUserName =  function (username) { $window.localStorage.setItem('userName', userName); };

	this.getUserName = function () { return $window.localStorage.getItem('userName'); };

	this.removeUserName = function () { $window.localStorage.removeItem('userName'); };
}])

.factory('LoginInterceptor', ['localStorageService', function (localStorageService) {
    return {
        request: function (config) {
            var token = localStorageService.getToken();
            if (token) {
            	config.headers.Authorization = token;
        	}
            return config;
            
        }
    }
}])

.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('LoginInterceptor');
}]);