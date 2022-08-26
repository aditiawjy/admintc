const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'db_toyscity',
    user: 'root',
    password: ''
});


/* const connection = mysql.createConnection({
    host : 'localhost',
    database : 'u5131584_toyscity',
    user: 'u5131584_toyscity',
    password: 'hip2020.!'
}); */

connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Database Connect");
    }
});

module.exports = connection;