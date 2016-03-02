'use strict';

var feedbackApp = angular.module('feedback');

feedbackApp.controller('feedbackControllerMain', ['$scope', '$http', '$routeParams', 'growl',
	function($scope, $http, $routeParams, growl) {	
    console.log('feedback controller');
}])

