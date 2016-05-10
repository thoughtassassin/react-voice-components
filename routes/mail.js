var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://postmaster@sandbox8e5029a864b7405f8ddcbfbb29613666.mailgun.org:06ad3a10a1a97c90e1a1232c768a3e35@smtp.mailgun.org');


/* GET mail page */
router.get('/', function(req, res, next) {
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"' + req.query.name + '"' + req.query.email,
        to: 'david.krause@egov.com',
        subject: 'Question from Voice API',
        text: req.query.comment,
        html: '<p>From: ' + req.query.name +
              '</p><p>Email: <a href="mailto:' + req.query.email + '">' + req.query.email +  '</a>' +
              '<p>Comment: ' + req.query.comment
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    res.render('mail', { name: req.query.name, email: req.query.email });
});

module.exports = router;
