const express = require('express');
const signupRouter = express.Router();
const mongodata = require('../model/mongodata');

signupRouter.get('/',function(req,res){
    res.render('signup');
});

signupRouter.post('/data',function(req,res){
   
   var item = {
    name    : req.body.name,
    number  : req.body.number,
    email   : req.body.email,
    password: req.body.password
   }

   var book = mongodata(item);
   book.save();
   res.redirect('/signin');
    
});

module.exports = signupRouter;