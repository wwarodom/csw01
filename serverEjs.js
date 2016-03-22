var express = require('express'),
		app	= express()

var posts_json = [{'user':'John','comment':'Hello John' },
				  {'user':'Jim','comment':'Hello Jim' }]

app.set('views','./views')		
app.set('view engine','ejs')
app.get('/ejs',function(req,res){
	res.render('post', 
		{ title: 'Hello Jade', 
		  message:'How are you doing?',
		  posts: posts_json} )
})
app.listen(8000, function() {
	console.log('Server is running...')
})