miniStoreApp.controller('ordersController', function($scope, customersFactory, ordersFactory){

	customersFactory.getCustomers(function(data) {
	    $scope.customers = data;
	});

	ordersFactory.getOrders(function(data){
		$scope.orders = data;
	});

	ordersFactory.getProducts(function(data){
		$scope.products = data;
	});

	$scope.addOrder = function(){
		$scope.newOrder.date = Date.now();
		ordersFactory.addOrder($scope.newOrder, function(){
			ordersFactory.getOrders(function(data){
					$scope.orders = data;
				});
				$scope.newOrder = {};
		});
		
	}
});