var mysql = require ('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'1234',
    database:'girrafe'
});

connection.connect();
connection.query('SELECT name FROM student WHERE student_id=1');
connection.end();



