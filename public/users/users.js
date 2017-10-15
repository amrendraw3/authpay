'use strict';

angular.module('authPay.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'usersController'
  });
}])

.controller('usersController', [ '$scope', '$http', function( $scope, $http ) {

	$scope.users = [];
	
	// Get all users on view load
	$scope.getUsers = function(){
		$http.get('/users')
		.success(function(data){
			console.log('DATA: ', data);
			$scope.users  = data;
		})
		.error(function(err){
			console.log('ERR: ', err);
		});
	};

	$scope.getUsers();

}]);