'use strict';

var usersApp = angular.module('users');

usersApp.controller('usersControllerMain', ['$scope', '$http', '$routeParams','$location', 'growl','$rootScope',
	function($scope, $http, $routeParams, $location,growl,$rootScope) {	
  console.log('users controller');

    $scope.hideFilter = true;
    $scope.hideAddRow = true;
    $scope.action = "none";

    var refresh = function() {
      $http.get('/api/v1/secure/admin/users').success(function(response) {
        console.log("I got the data I requested");
        $scope.userlist = response;
        console.log(response);
        $scope.user = "";
      });
    };

    refresh();

    $scope.addRecord = function(){
      $scope.hideAddRow = false;
      $scope.action = "add";
    };

    $scope.save = function() {
      switch($scope.action)
      {
        case "add":
          $scope.addUser();
          break;

        case "edit":
          $scope.update();
          break;
      }
    }

    $scope.addUser = function() {
      console.log($scope.user);
      //$http.post('/api/v1/users/', $scope.user).success(function(response) {
      $http.post('/api/v1/secure/admin/users/', $scope.user).success(function(response) {	
        console.log(response);
        refresh();
        $scope.action = "none";
        $scope.hideAddRow = true;
      });
    };

    $scope.remove = function(id) {
      console.log(id);
      $http.delete('/api/v1/secure/admin/users/' + id).success(function(response) {
        refresh();
        growl.info(parse("User with %s deleted successfully", "slkfd"));
      });
    };

    $scope.edit = function(id) {
      console.log(id);
      $http.get('/api/v1/secure/admin/users/' + id).success(function(response) {
        $scope.user = response;
        $scope.hideAddRow = false;
        $scope.action = "edit";
      });
    }; 

    $scope.update = function() {
      console.log($scope.user._id);
      $http.put('/api/v1/secure/admin/users/' + $scope.user._id, $scope.user).success(function(response) {
        refresh();
        $scope.action = "none";
        $scope.hideAddRow = true;
      })
    };

    $scope.deselect = function() {
      $scope.user = "";
      $scope.hideAddRow = true;
    }
 }])


