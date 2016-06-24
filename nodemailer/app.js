var express = require('express');
var app = express();

app.use(express.static('web'));

app.post('/', function(req, res) {
	// res.write('hello nolan');

	var postData = '';
	req.setEncoding('utf-8');
	req.on('data', function(chunk) {
		postData += chunk;
		console.log('有数据了。。。')
	});
	req.on('end', function() {
		res.end(postData);
	});

})

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	//https://github.com/andris9/nodemailer-wellknown#supported-services 支持列表
	service: 'qq',
	port: 465, // SMTP 端口
	secureConnection: true, // 使用 SSL
	auth: {
		user: '545921090@qq.com',
		//这里密码不是qq密码，是你设置的smtp密码
		pass: 'hbivpnglopgfbffi'
	}
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
	from: '545921090@qq.com', // 发件地址
	to: 'wwh324@163.com', // 收件列表
	subject: '一封来自爸爸的信', // 标题
	//text和html两者只支持一种
	text: '儿子你好！' // 标题
	//html: '<b>Hello world ?</b>' // html 内容
};

// send mail with defined transport object
var count = 1;
setInterval(function() {
	console.log('轰炸B哥', count, "次");
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: ' + info.response, "轰炸成功！");
		count++;
	});
}, 3000)


var server = app.listen(8000, function() {
	console.log('server started at 8000');
})