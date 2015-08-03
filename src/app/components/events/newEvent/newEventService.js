'use strict';
angular.module('newEventsModule', ['ngFileUpload'])

.service('newEventsService', ['$http', 'apiHost','Upload',  function ($http, apiHost, Upload) {

    this.createEvent = function (file, newEvent) {
        return Upload.upload({
          url: apiHost + '/api/event',
          data: { EventName : newEvent.eventName,
                EventDescription : newEvent.eventDescription,
                Date : newEvent.dateTime.toISOString()
                },
          fields:{ EventName: newEvent.eventName, EventDescription : newEvent.eventDescription,
                  Date : newEvent.dateTime.toISOString() },
          file: file
        })
    }
}]);