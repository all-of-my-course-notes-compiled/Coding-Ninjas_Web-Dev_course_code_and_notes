const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

// middleware1
app.use(function(req, res, next){
   

    req.myName = "Arpan"
    // console.log('middleware 1 called');
    next();
});

// middleware2
app.use(function(req, res, next){
    
    console.log('My name called from MW2', req.myName);
    // console.log('middleware 2 called');
    next();
});


var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});


app.get('/', function(req, res){
    console.log('from the get route controller', req.myName);
    return res.render('home',{
        title: "Contact List",
        contact_list: contactList
    });
})
app.post('/create-contact', function(req, res){
 
    contactList.push(req.body);
    return res.redirect('/');

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})
