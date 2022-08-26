// @ts-nocheck
const { query } = require('express');
var express = require('express');
var router = express.Router();
var md5 = require('md5');

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

    var user_hp = request.body.user_hp;
    var user_password = request.body.user_password;

    
    var pass = 'toys' + user_hp + 'city2020';
    var hash = md5(pass);

    if(user_hp && user_password){
        const query = `SELECT * FROM tbl_user where handphone = "${user_hp}"`;
        database.query(query, function(error,data){
          response.send(data);
          // if(data.length > 0){
          //   for(var count = 0; count < data.length; count++){
          //     if(data[count].user_hp == hash){
          //       response.send('Correct Password');
          //     }else{
          //       response.send('Incorrect Password');
          //     }
          //   }
          // }
        });
    }else{
      response.send('Please Enter Email Address and Password Details1')
      response.end();
    }

});

module.exports = router;
