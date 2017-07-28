var orm = require('../config/orm.js');
console.log("Loaded cubs")
var cub = {

all: function(cb) {

	orm.all('techstack', function(res){

		cb(res);

	});
},

create: function (cols, vals, cb) {

	orm.create('techstack', cols, vals, function(res){

		cb(res);

	});
},
update: function(objColVals, condition, cb) {

	orm.update('techstack', objColVals, condition, function(res){

		cb(res);

	});
	
  },
  delete: function(condition, cb) {

	orm.delete('techstack', condition, function(res){

		cb(res);

	});
	
  }

};

module.exports = cub;