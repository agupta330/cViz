'use strict';

angular.module('feedback')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      
      .when('/f/', {
        templateUrl: '/public/mods/feedback/feedbackViewAdd.html',
        controller: 'feedbackControllerMain'
      })
    }
  ]);
