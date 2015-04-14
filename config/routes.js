var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');

module.exports = function(app) {
	//--------Customer Stuff-----------
	app.get('/customers', function(request, response) {
	  customers.show(request, response);
	});

	app.post('/addCustomer', function (request, response){
	    customers.update(request, response);
	});

	app.post('/removeCustomer', function (request, response){
		customers.remove(request, response);
	});
	//----------Order Stuff---------------
	app.get('/orders', function(request, response) {
		orders.show(request, response);
	});

	app.post('/addOrder', function(request, response){
		orders.add(request, response);
	});

}