var express = require('express'),
		app	= express(),
		bodyParser = require('body-parser')

var posts_json = [{'user':'John','comment':'Hello John' },
				  {'user':'Jim','comment':'Hello Jim' }]
var urlencodedParser = bodyParser.urlencoded({extended:false})

app.set('views','./views')		
app.set('view engine','ejs')
app.get('/ejs',function(req,res){
	res.render('post', 
		{ title: 'Hello Jade', 
		  message:'How are you doing?',
		  posts: posts_json} )
})

app.post('/addUser', urlencodedParser, function(req,res){
	var length = Object.keys(posts_json).length
	posts_json.push({})
	posts_json[length].user = req.body.user
	posts_json[length].comment = req.body.comment
	res.render('post', 
		{ title: 'Hello Jade', 
		  message:'How are you doing?',
		  posts: posts_json} )
})

app.listen(8000, function() {
	console.log('Server is running...')
})