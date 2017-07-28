var orm = require('../config/orm.js');
console.log("Loaded cubs")
var adam = {

all: function(cb) {

	orm.all('cubInfo', function(res){

		cb(res);

	});
},

create: function (cols, vals, cb) {

	orm.create('cubInfo', cols, vals, function(res){

		cb(res);

	});
},
update: function(objColVals, condition, cb) {

	orm.update('cubInfo', objColVals, condition, function(res){

		cb(res);

	});
	
  },
  delete: function(condition, cb) {

	orm.delete('cubInfo', condition, function(res){

		cb(res);

	});
	
  }

};

module.exports = adam;