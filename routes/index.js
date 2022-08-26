var express = require('express');
var router = express.Router();

var database = require('../database');
console.log(database);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session : req.session });
});

router.post('/login', function(request, response, next){

    var user_email_address = request.body.user_email_address;
    var user_password = request.body.user_password;

    if(user_email_address && user_password){
        
    }else{
      response.send('Please Enter Email Address and Password Details')
      response.end();
    }

});

module.exports = router;
