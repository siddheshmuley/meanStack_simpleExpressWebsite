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

app.get('/',function(res,res){
    res.render('index',{'title':'Welcome'});
});
app.get('/about',function(res,res){
    res.render('about',{'title':'About'});
});
app.get('/contact',function(res,res){
    res.render('contact',{'title':'Contact Us'});
});

app.listen(3000);
console.log("Server is running on port 3000...");