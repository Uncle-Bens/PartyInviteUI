'use strict';
angular.module('eventsModule')

.factory('EventsModel', ['eventApiService', function (eventApiService){
	return function (){
		var self = this;

		eventApiService.GetAllEvents().success(function (data){
			self.allEvents = data;
		});
	};
}])