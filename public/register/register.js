'use strict';

angular.module('authPay.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'registerController'
  });
}])

.controller('registerController', [ '$scope', '$http', function( $scope, $http ) {

	$scope.user    = {};
	$scope.message = "";

	// Handle register request
	$scope.register = function() {
		if($scope.user.password != $scope.user.repassword) {
			alert('Password does not match!');
			return;
		}
		console.log('USER: ', $scope.user);
		$http.post('/users', $scope.user)
		.success(function(data){
			console.log('DATA: ', data);
			$scope.users  = data;
			$scope.message = "User has been successfully registered!";
		})
		.error(function(err){
			console.log('ERR: ', err);
		})
	}

}]);