'use strict';

angular.module('authPay.tokens', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tokens', {
    templateUrl: 'tokens/tokens.html',
    controller: 'tokensController'
  });
}])

.controller('tokensController', [ '$scope', '$http', function($scope, $http) {

	$scope.tokens = [];
	
	// Get all tokens on view load
	$scope.getTokens = function(){
		$http.get('/tokens')
		.success(function(data){
			console.log('DATA: ', data);
			$scope.tokens  = data;
		})
		.error(function(err){
			console.log('ERR: ', err);
		});
	};

	$scope.getTokens();

}]);