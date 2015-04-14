miniStoreApp.controller('customersController', function($scope, customersFactory) {

  customersFactory.getCustomers(function(data) {
    $scope.customers = data;
  });

  $scope.addCustomer = function() {
    var check = true;
    for(customer in $scope.customers)
    {
      if($scope.newCustomer.name == $scope.customers[customer].name)
      {
        check = false;
        $scope.newCustomer = {};
      }
    }
    if(check == true)
    {
      customersFactory.addCustomer($scope.newCustomer, function() {
        customersFactory.getCustomers(function(data) {
          $scope.customers = data;
        });
        $scope.newCustomer = {};
      }); 
    } 
  }

  $scope.removeCustomer = function(customer){
    customersFactory.removeCustomer(customer, function() {
    customersFactory.getCustomers(function(data) {
      $scope.customers = data;
    });
    }); 
  }

});