var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
  return {
    show: function(request, response) {
	  Customer.find({}, function(err, results) {
	    if(err) {
	      console.log(err);
	    } else {
	      response.json(results);
	    }
	  })
	},
	update: function(request, response) {
		var customer = new Customer({name: request.body.name, age: request.body.age});
		customer.save(customer);
	},
	remove: function(request, response) {
		Customer.findByIdAndRemove(request.body._id, function(err) {
		 if (err) throw err;
		 console.log('User deleted!');
		});
	}
  }
})();