
const express = require('express');
const router = express.Router();
const cub = require('../models/cub.js');
const adam = require('../models/adam.js');


 // at Object.create (/Users/fundaistvan/cub/config/orm.js:51:14)
 //    at Object.create (/Users/fundaistvan/cub/models/cub.js:16:6)
 //    at /Users/fundaistvan/cub/controllers/cubs_controller.js:29:9
  router.get("/api/cubs", function(req, res) {
    db.Post.findAll({})
    .then(function(dbcubs) {
      res.json(dbcubs);
    });
  });

router.get('/', function(req,res){

	res.redirect('/cubs')

});

router.get('/cubs', function(req,res){
	console.log("In da cub")
	cub.all(function(cubData){
		adam.all(function(adamData) {
			var hbsObject = { cubs: cubData, adam: adamData };
			console.log(hbsObject);
			res.render('index', hbsObject);
		});
	});	
});

router.get('/cubs/partials', function(req,res){
	console.log("Hitting cub partials route")
	cub.all(function(cubData){
		adam.all(function(adamData) {
			var hbsObject = { cubs: cubData, adam: adamData };
			console.log(hbsObject);
			res.render('partials', hbsObject);
		});
	});	
});

//router.post('/cub/create', function (req, res) {
//   cub.insertOne(req.body.cub_name, function() {
//     res.redirect('/index');
//   });
// });

router.post("/", function (req, res) {
  cub.create([
    "name", "skilled"
  ], [
    req.body.name, req.body.skilled
  ], function () {
    res.redirect("/cubs");
  });
});

router.put('/cubs/update/:id', function(req,res){

	console.log("Hitting cub put/update route")

	var condition = "id = " + req.params.id;

	console.log('condition', condition);

	cub.update({ skilled: req.body.skilled }, condition, function(){

			res.redirect('/cubs');

	});	
});

router.delete('/cubs/delete/:id', function(req,res){
	console.log("Hitting cub delete route")

	var condition = "id = " + req.params.id;

	cub.delete(condition, function(){

		res.redirect('/');
	});

});

module.exports = router;
