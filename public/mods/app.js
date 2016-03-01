'use strict';

angular.module('baseApp', ['keynotes', 'clients', 'userDirective', 'scheduler'])

.run(function ($rootScope, $location, $http) {
	$http.get('/token')
		.success(function (user, status) {
		if (user) {
			$rootScope.user = user;
		}
	});
})

angular.module('baseApp', ['keynotes', 'clients', 'userDirective','profile'])

.config(['growlProvider', function(growlProvider) {
	growlProvider.globalReversedOrder(true);
	growlProvider.globalTimeToLive({success: 1000, error: 2000, warning: 3000, info: 4000});
	growlProvider.globalDisableCountDown(true);
	growlProvider.globalPosition('top-center');
}]);
