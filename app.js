var express = require('express');
var app = express();

app.use(express.static('web'));

app.post('/',function(req,res){
	// res.write('hello nolan');

	var postData = '';
	req.setEncoding('utf-8');
	req.on('data',function(chunk){
		postData += chunk;
		console.log('有数据了。。。')
	});
	req.on('end',function(){
		res.end(postData);
	});

})


var server = app.listen(8000,function(){
	console.log('server started at 8000');
})

