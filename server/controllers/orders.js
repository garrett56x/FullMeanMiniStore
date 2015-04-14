var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function() {
  return {
    show: function(request, response) {
	  Order.find({}, function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      response.json(results);
	    }
	  })
	},
	add: function(request, response) {
		var order = new Order({name: request.body.name, product: request.body.product, quantity: request.body.quantity});
		order.save(order);
	},
  }
})();