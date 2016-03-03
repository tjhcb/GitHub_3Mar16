angular.module('testRoute', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/test', {
		templateUrl: 'testSp.html'
	});
}]);