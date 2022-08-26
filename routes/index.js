// @ts-nocheck
const { query } = require('express');
var express = require('express');
var router = express.Router();

var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  database.ping((err)=>{
    if(err) return res.status(500).send("MySQL Server is Down");
        //res.send("MySQL Server is Active");
    }); 
  res.render('index', { title: 'express', session : req.session });
});

router.post('/login', function(request, response, next){

    var user_email_address = request.body.user_email_address;
    var user_password = request.body.user_password;

    if(user_email_address && user_password){
        query = `SELECT * FROM user_login where user_email = "${user_email_address}"`;
        database.query(query, function(error,data){
          if(data.length > 0){
            for(var count = 0; count < data.length; count++){
              if(data[count].user_email == user_password){

              }else{
                response.send('Incorrect Password');
              }
            }
          }
        });
    }else{
      response.send('Please Enter Email Address and Password Details1')
      response.end();
    }

});

module.exports = router;
