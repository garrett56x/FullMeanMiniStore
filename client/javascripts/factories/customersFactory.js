miniStoreApp.factory('customersFactory', function($http) {
  var factory = {};
  var customers = [];

  factory.getCustomers = function(callback) {
    $http.get('/customers').success(function(output) {
      customers = output;
      callback(customers);
      }); 
  }

  factory.addCustomer = function(info, callback) {
    $http.post('/addCustomer', info);
    callback(customers);
  }

  factory.removeCustomer = function(customer, callback) {
    $http.post('/removeCustomer', customer);
    callback(customers);
  }

  return factory;
});