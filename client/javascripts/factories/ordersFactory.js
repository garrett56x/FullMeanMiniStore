miniStoreApp.factory('ordersFactory', function($http){
	var orders = [];
	var products = [
		{item: 'Nike Shoes'},
		{item: 'Black Belt'},
		{item: 'Candy'},
		{item: 'Ice Cream'}
	];
	var factory = {};

	factory.getOrders = function(callback){
		$http.get('/orders').success(function(output) {
	      orders = output;
	      callback(orders);
	      }); 
	}

	factory.addOrder = function(info, callback){
		$http.post('/addOrder', info);
    	callback(orders);
	}

	factory.getProducts = function(callback){
		callback(products);
	}

	return factory;
});