angular.module('visits', [])

.controller('visitsCtrl', function($scope, $ionicModal, $timeout, $http) {
	$http.get('/api/v1/secure/visits').success(function(response) {
		$scope.visitList = response;

		angular.forEach($scope.visitList, function(item){
		 item.startDate = item.schedule[0].startDate;
		 item.endDate = item.schedule[item.schedule.length-1].endDate;

		 angular.forEach(item.schedule, function(sch){
			 if(item.locations === undefined)
			 	item.locations = sch.location;
			else
			 	item.locations = item.locations + ", " + sch.location;

		 })
 		})

	});
})

.controller('visitCtrl', function($scope, $stateParams, $http) {
	$http.get('/api/v1/secure/visits/' + $stateParams.id).success(function(response) {
		$scope.visit = response;
	});
});
