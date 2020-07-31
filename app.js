const express = require('express');
const bodyParser = require('body-parser');
const app =  express();

const signinRouter = require('./src/routes/signinRoute');
const signupRouter = require('./src/routes/signupRoute');


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);



app.get('/',function(req,res){
    res.render("index",{
        title:'MechaFuel',
        company:['Indian Oil','Hp','SR','Reliance'],
        heading:['Top Company','Select FuelStation']
    });
});


app.listen(5000);
