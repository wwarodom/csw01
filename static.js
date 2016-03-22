var express = require('express'), 
    app = express();

app.use(express.static(__dirname + '/public'))

var session = require('express-session')
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
									resave: true, saveUninitialized:true })) 
app.use(function(req, res, next) { 
   var sess = req.session 
   if (sess.views) { 
      sess.views++ 
   } else { 
      sess.views = 1 
   } 
   next()
})

app.get('/session', function(req,res){
	var str = "Session = " +  req.session.views + "<br>" +
				"maxAge = " +  req.session.cookie.maxAge
	res.send(str)
})
  
app.listen(8000, function() {
	console.log('Server is running....')
});

// bodyParser = require('body-parser');  
// var urlencodedParser = bodyParser.urlencoded({ extended: false });   
// app.post('/add', urlencodedParser, function(req, res){ 
//    var result = parseInt(req.body.a) + parseInt(req.body.b); 
//    res.send('Result = ' + result); 
// });

// app.get('/test', function(req,res) {
// 	var result = "<html><img src=./images/pc.jpg></html>"
// 	res.send(result)
// })

// var cookieParser = require('cookie-parser')

// app.use(cookieParser('keyboard cat'))
// app.get('/ck_get', function(req, res) { 
//    res.send(req.cookies) 
// })

// app.get('/ck_set', function(req, res) { 
//    res.cookie('a', 10) 
//    res.cookie('b', 10)
//    res.send('ok') 
// })

  

