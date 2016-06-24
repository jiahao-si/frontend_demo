module.exports = {
    mail: {
        from: {
            name: 'App name',
            service: 'Gmail',
            auth: {
                user: 'gmail.name@gmail.com',
                pass: 'gmail.password'
            }
        },
        to: [
            'Zhixin Wen <wenzhixin2010@gmail.com>'
        ]
    }
};

// var nodemailer = require('nodemailer'),
//     config = require('./config'),
//     smtpTransport = nodemailer.createTransport('SMTP', config.mail.from);
// /**
//  * @param {String} subject：发送的主题
//  * @param {String} html：发送的 html 内容
//  */
// function sendMail(subject, html) {
//     var mailOptions = {
//         from: [config.mail.from.name, config.mail.from.auth.user].join(' '),
//         to: config.mail.to.join(','),
//         subject: subject,
//         html: html
//     };

//     smtpTransport.sendMail(mailOptions, function(error, response) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Message sent: ' + response.message);
//         }
//         smtpTransport.close();
//     });
// };