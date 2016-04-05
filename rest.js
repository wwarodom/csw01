var express = require('express')
var app = express() 
var router = express.Router() 
var bodyParser = require('body-parser')
var bears = [{'id':0,'name':'Vinnie','weight':100},
			 {'id':1,'name':'Pooh','weight':80}] 	

var bearIndex = 2;

app.use(express.static('public'))
			 		  
router.route('/bears') 
	// post new bear
  .post(function(req, res) { 
    var bear = {}
    bear.id = bearIndex++
    bear.name = req.body.name 
    bear.weight = req.body.weight
    bears.push(bear)
    res.json({message: 'Bear created!'})
    // res.json(bears) 
  })

  // get all bears
  //http://localhost/api/bears
  .get(function(req,res) {
  	res.json(bears)
  })

//http://localhost/api/bears/:bear_id
router.route('/bears/:bear_id')
	// show a bear
	.get(function(req,res) {
		res.json(bears[req.params.bear_id])
	})

	// update a bear
	.put(function(req,res) {
		var id = req.params.bear_id
		bears[id].name = req.body.name
		bears[id].weight = req.body.weight
		res.json({message: 'Bear updated!'})
	})

	// delete a bear
	.delete(function(req,res) {
		var id = req.params.bear_id
		delete bears[id]
		res.json({message: 'Bear deleted!'})
	})

// all of our routes will be prefixed with /api 
app.use('/api', bodyParser.json(), router)
// app.use('/api',bodyParser.urlencoded({extended:false}), router)

app.listen(8000, function (){
	console.log('Server is running...')
})
