var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
  {
	id: 1,
	name: "Chewing Gum",
	color: "Red"
  },
	
  {
  	id: 2,
	name: "Pez",
	color: "Green"
  },
  {
  	id: 3,
  	name: "Marshmallow",
  	color: "Pink"
  },
  {
  	id: 4,
  	name: "Candy Stick",
  	color: "Blue"
  }

];

// var theBestCandies = JSON.stringify(candies);

//What would need to go into candies
//in order to pass our first test?



//INDEX ROUTE//
router.get('/candies', function(req,res) {
	res.json(candies);
});

//SHOW ROUTE//
router.get('/candies/:id', function(req,res) {
	var candyId = req.params.id;

res.send(candies[candyId-1]);
});

//POST ROUTE//
router.post('/candies', function(req,res) {
	candies.push(req.body);
	res.json(req.body);
});

//PUT ROUTE//
router.put('/candies/:id', function(req, res) {
  var candyId = req.params.id;
  var candyToEdit = candies[candyId-1];
  candyToEdit.name = req.body.name;
  candyToEdit.color = req.body.color;
  res.json(candyToEdit);

});


//DELETE ROUTE//
router.delete('/candies/:id', function(req, res) {
	var candyId = req.params.id;
  candies.splice((candyId-1), 1);
  res.json(candies);
});
// Fill out the rest of the routes here

module.exports = router;






