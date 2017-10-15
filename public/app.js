'use strict';

// Declare app level module which depends on views, and components
angular.module('authPay', [
  'ngRoute',
  'authPay.pay',
  'authPay.tokens',
  'authPay.register',
  'authPay.users'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/pay'});
}]);
