'use strict';

angular.module('authPay.pay', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pay', {
    templateUrl: 'pay/pay.html',
    controller: 'payController'
  });
}])

.controller('payController', ['$scope', '$http', function($scope, $http) {
	
	$scope.message = "";

	// Accept payment from view
	$scope.pay = function(){
		console.log('Pay');
		$http.post('/payments')
		.success(function(data){
			console.log('DATA: ', data);
			$scope.message = "A new token has been generated: " + data.token;
		})
		.error(function(err){
			console.log('ERR: ', err);
		})
	};

}]);