const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'db_toyscity',
    user: 'root',
    password: ''
});

connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Database Connect");
    }
});

module.exports = connection;