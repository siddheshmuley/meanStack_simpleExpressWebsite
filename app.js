const express  =require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
    res.render('index',{'title':'Computer Not Working'});
});

app.get('/about',function(req,res){
    res.render('about',{'title':'About'});
});

app.get('/contact',function(req,res){
    res.render('contact',{'title':'Contact Us'});
});

app.post('/contact/send',function(req,res){
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sassidd@gmail.com',
            pass: 'Morningstar00'
        },
        tls: {
          rejectUnauthorized: false
        }
    });
    
    let mailOptions = {
        from: 'Siddhesh Muley <sassidd@gmail.com>',
        to: 'Siddhesh Muley <siddheshmuley1462@gmail.com>',
        subject: 'TestSubmission',
        text: 'You have a test submission... from: '+req.body.name+' email: '+req.body.email+' with message: '+req.body.message,
        html: '<p>You have a test submission...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
    };
    
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
            res.redirect('/');
        }
        else{
            console.log('Message Sent: '+info.response);
            res.redirect('/');
        }
    });
});

app.listen(3000);
console.log("Server is running on port 3000...");