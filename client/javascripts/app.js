var miniStoreApp = angular.module('miniStoreApp', ['ngRoute']);

  miniStoreApp.config(function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'partials/customers.html'
        })
        .when('/orders',{
            templateUrl: 'partials/orders.html'
        })
        .otherwise({
          redirectTo: '/'
        });
  });