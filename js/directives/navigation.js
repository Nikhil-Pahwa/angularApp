(function(){
	var app = angular.module('global-nav',['ngRoute']);

	app.directive('globalNav',function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/global-navigation.html'
		}
	});

	app.config(['$routeProvider',
		function($routeProvider){
			$routeProvider.
				when('/account',{
					templateUrl: 'templates/myAccount.html'
				}).
				when('/store',{
					templateUrl: 'templates/store-route.html'
				}).
				when('/contact',{
					templateUrl: 'templates/contact-route.html'
				})
				.otherwise({
					templateUrl: 'templates/store-route.html'
				})
		}
	])

})();