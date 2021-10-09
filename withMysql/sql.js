const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'info'
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("mysql connected")
});
//just adding some comments
module.exports.connection = connection;