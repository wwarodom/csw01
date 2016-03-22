var express = require('express'); 
var app = express(); 

var students = [
	{ 'id':1, 'code':'1001','name':'John'},
	{ 'id':2, 'code':'1002','name':'Jack'},
	{ 'id':3, 'code':'1003','name':'Joe'}
];

// Q1: print students on console 
function list() { console.log(students); }
list();

// Q2: function(2) => student 2   
function findId(id) { return students[id-1]; } 
console.log(findId(1));

app.use(function (req, res, next) { 
   console.log('Time:', Date.now()); 
  next(); 
}); 

app.use('/user/:id', function (req, res, next) { 
   console.log('Request Type:', req.method); 
   next(); 
});


app.get('/user/:id', function(req, res){      
   var std =	findId(req.params.id );
   var output = '<br>id: ' +std.id + 
   				'<br> code:'+ std.code + 
   				'<br> name:' + std.name;
   res.send(output); 
}); 

  
app.get('/', function(req, res){ 
   res.send('Hello world') 
}); 
  
var server = app.listen(8000 , function () {
	console.log(server.address().address );
	console.log( server.address().port );
	console.log('server is running...');	
});
